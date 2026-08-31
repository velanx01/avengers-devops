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
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Avengers project...'
            }
        }
    }
}