import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const REPORTS_DIR = path.join(PROJECT_ROOT, 'reports');
const ALLURE_RESULTS_DIR = path.join(PROJECT_ROOT, 'allure-results');
const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;

// Ensure System32 is in PATH so cmd.exe can be found by child processes
if (process.env.PATH && !process.env.PATH.toLowerCase().includes('system32')) {
    process.env.PATH = `${process.env.PATH};C:\\Windows\\System32`;
}

function ensureDirSync(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

function generateReport() {
    console.log('Generating new Allure report...');
    ensureDirSync(REPORTS_DIR);
    
    const timestamp = Date.now();
    const outputDir = path.join(REPORTS_DIR, `allure-report-${timestamp}`);
    
    try {
        execSync(`npx allure generate "${ALLURE_RESULTS_DIR}" --clean -o "${outputDir}"`, { stdio: 'inherit' });
        console.log(`Report generated successfully at: ${outputDir}`);
        return outputDir;
    } catch (error) {
        console.error('Failed to generate Allure report:', error.message);
        return null;
    }
}

function copyHistory() {
    console.log('Copying history from previous report for trend graphs...');
    if (!fs.existsSync(REPORTS_DIR)) return;
    
    const files = fs.readdirSync(REPORTS_DIR);
    const reports = files.filter(f => f.startsWith('allure-report-'));
    if (reports.length === 0) return;
    
    // Sort by timestamp descending
    reports.sort((a, b) => {
        const t1 = parseInt(a.replace('allure-report-', ''));
        const t2 = parseInt(b.replace('allure-report-', ''));
        return t2 - t1; // Highest first
    });
    
    const lastReport = reports[0];
    const lastHistoryPath = path.join(REPORTS_DIR, lastReport, 'history');
    const newHistoryPath = path.join(ALLURE_RESULTS_DIR, 'history');
    
    if (fs.existsSync(lastHistoryPath)) {
        ensureDirSync(newHistoryPath);
        fs.cpSync(lastHistoryPath, newHistoryPath, { recursive: true });
        console.log(`Copied history from ${lastReport}`);
    }
}

// Execute the steps
copyHistory();
const outputDir = generateReport();
// cleanupOldReports(); // Disabled as per user request to not clean old reports

if (outputDir) {
    console.log(`Opening report: ${outputDir}`);
    try {
        execSync(`npx allure open "${outputDir}"`, { stdio: 'inherit' });
    } catch (e) {
        console.error('Failed to open report', e);
    }
}
