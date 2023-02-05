pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                archiveArtifacts artifacts: 'dist/'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'webserver_login', usernameVariable: 'USERNAME', passwordVariable: 'USERPASS')]) {
                    sshPublisher(
                        failOnError: true,
                        continueOnError: false,
                        publishers: [
                            sshPublisherDesc(
                                configName: 'production',
                                sshCredentials: [
                                    username: "$USERNAME",
                                    encryptedPassphrase: "$USERPASS"
                                ], 
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: 'dist/**',
                                        removePrefix: 'dist/',
                                        remoteDirectory: '/tmp',
                                        execCommand: 'python3 /tmp/hello-world.py'
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}