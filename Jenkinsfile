 
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Security Scan') {
            steps {
                sh 'npm audit --json > audit-report.json'
            }
        }
    }
    post {
        always {
            junit 'test-results/*.xml'
            archiveArtifacts artifacts: 'audit-report.json', fingerprint: true
        }
    }
}
