
pipeline {
  agent any
 
  tools {nodejs "node"}
  
  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Example') {
      steps {
        bat 'npm -v'
      }
    }
  }
}
