pipeline{
    agent {
        docker {
            image "qaninja/node-wd"
            args "--network=skynet"
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
        stage('Tests') {
            steps {
                sh "npm run test:ci"    
            }
            post {
                always {
                    junit testResults: "ls tests_output/**/*.xml"
                }
            }
        }
    }
}