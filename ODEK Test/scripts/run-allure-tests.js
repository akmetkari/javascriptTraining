import { execSync } from 'child_process';
import process from 'process';

if (process.env.PATH && !process.env.PATH.toLowerCase().includes('system32')) {
    process.env.PATH = `${process.env.PATH};C:\\Windows\\System32`;
}

console.log('Cleaning old results...');
try {
    execSync('npx rimraf allure-results', { stdio: 'inherit' });
} catch (e) {
    // ignore
}

console.log('Running tests...');
try {
    execSync('npx playwright test', { stdio: 'inherit' });
} catch (e) {
    console.log('Some tests failed, proceeding to generate report...');
}

console.log('Running report manager...');
try {
    execSync('node scripts/manage-reports.js', { stdio: 'inherit' });
} catch (e) {
    console.error('Failed to manage reports', e);
}
