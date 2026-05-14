import { execSync } from 'child_process';
import process from 'process';

if (process.env.PATH && !process.env.PATH.toLowerCase().includes('system32')) {
    process.env.PATH = `${process.env.PATH};C:\\Windows\\System32`;
}

try {
    execSync('npx allure serve allure-results', { stdio: 'inherit' });
} catch (e) {
    console.error('Failed to serve report', e);
}
