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
                sh 'sudo docker build -t expresser .'
            }
        }
        stage('Docker Run') {
            steps {
                sh 'sudo docker kill $(sudo docker ps -q --filter ancestor=expresser )'
                sh 'sudo nohup docker run -p 3000:3000 expresser &'
            }
        }
    }
}