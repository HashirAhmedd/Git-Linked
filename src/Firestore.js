
import { getDatabase, ref, set , get} from "firebase/database";
import { app } from './FirebaseConfig'
const db = getDatabase(app);



const userRef = ref(db,'users')


const ifUserExists = async(userId)=>{
    try{
        const snapshot = await get(userRef)
        let Users = snapshot.val()
        if(snapshot.exists()){
           let users =Object.keys(Users)
            for(let i=0 ; i<users.length ; i++){
                if(users[i] == userId){
                    return true;
                }
            }
            return false
        }
    }
    catch(err){
        console.log(err)
    }
}


const createNewUser = async (userId)=>{

    const userExists = await ifUserExists(userId)
    if(!userExists){
        set(ref(db,'users/'+userId),{
            likedRepos:""
        })
    }
}

const updateLikedRepo = async(userId , newRepoId)=>{

    const snapshot = await get(userRef)
    let Users = snapshot.val()

    let prevRepoId = Users[userId]['likedRepos']

    set(ref(db,'users/'+userId),{
        likedRepos:prevRepoId+` ${newRepoId}`
    })

}

const getUserData = async (userId)=>{
    const snapshot = await get(userRef)
    let Users = snapshot.val()
    return  Users[userId]['likedRepos']
}

export {createNewUser, updateLikedRepo , getUserData}