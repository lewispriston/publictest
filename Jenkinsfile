pipeline {
    agent any
    tools {nodejs "nodejs"}
    environment {
        CI = 'true'
    }

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
        stage('Docker Build') {
            steps {
                sh 'sudo docker build -t express .'
            }
        }
        stage('Docker Run') {
            steps {
                sh 'sudo docker build -d express'
            }
        }
    }
}