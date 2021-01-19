pipeline{
    agent {
        docker {
            image "qaninja/node-wd"
            args "--network=skynet"
        }
    }
    stages {
        stage('build') {
            steps {
                sh "npm install"
            }
        }
        stage('tests') {
            steps {
                sh "npm run test:ci"
                junit testResults: "ls tests_output/**/*.xml"
            }
            
        }
    }
}