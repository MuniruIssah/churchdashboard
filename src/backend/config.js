
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAq-pSCfti6cxw7xj-9T5j-sxcYfy2lrPo",
    authDomain: "churchdashboard.firebaseapp.com",
    projectId: "churchdashboard",
    storageBucket: "churchdashboard.appspot.com",
    messagingSenderId: "5718030448",
    appId: "1:5718030448:web:4e597d4439d2e2ab605cb5"
  };
 
firebase.initializeApp(firebaseConfig);

export const auth  = firebase.auth()
const db = firebase.firestore()
db.settings({timestampsInSnapShots:true})
export {db}
export default firebase