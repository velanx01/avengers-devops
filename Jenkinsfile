pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Avengers project...'
                bat 'dir'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Avengers project...'
                bat 'if exist index.html (echo index.html FOUND) else (echo index.html NOT FOUND)'
            }
        }
    }
}