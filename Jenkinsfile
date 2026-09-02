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
               sh 'ls -la'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Avengers project...'
                sh 'if [ -f index.html ]; then echo "index.html FOUND"; else echo "index.html NOT FOUND"; fi'
            }
        }
    }
}