pipeline{
    agent {
        docker {
            image "qaninja/node-wd"
            args "--networks=skynet"
        }
    }
    stages {
        stage('build') {
            steps {
                sh "npm_install"
            }
        }
        stage('tests') {
            sh "npm run test:ci"
            junit testResults: "ls tests_output/**/*.xml"
        }
    }
}