
pipeline {
  agent any
 
  tools {nodejs "node"}
  
  stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
 
  stages {
    stage('Example') {
      steps {
        sh 'npm -v'
      }
    }
  }
}
