
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Loader from './Components/Loader'
import { useState , useEffect } from 'react'
import { setDoc,doc , getDocs , collection ,updateDoc , deleteDoc , addDoc } from 'firebase/firestore';
import { db , storage } from './firebase.config';
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
const Blog = () => {
  const user_id = localStorage.getItem("user_id")
  const [id, setid] = useState();
  const [title, settitle] = useState('');
  const [ingr, setingr] = useState('');
  const [desc, setdesc] = useState('');
  const [img, setimg] = useState(null);
  const [imgUrl, setimgUrl] = useState(null);
  const [data, setData] = useState([]);

  const [editTest, seteditTest] = useState(false);

  // Récupérez les données d'un document par ID
  const dbRef = collection( db, "recettes" )
  const fetch = async (user)=>{
    const snapshot = await getDocs(dbRef)
    const fetchData = snapshot.docs.map( (doc) => ({id : doc.id, ...doc.data()}) )
    // console.log( fetchData )
    const fetchData2 = fetchData.filter( (doc) => doc.user_id === user )
    console.log(fetchData2);
    setData( fetchData2 )

  }

  const update = async ()=>{
    const updatedRef = doc( dbRef, id)
    try{
        await updateDoc( updatedRef, { user_id: user_id,
          title: title,
          ingredient: ingr,
          description: desc,
          imageUrl: imgUrl
      })
        alert( "Modification reussi" )
        window.location.reload()
    }catch ( error ){
        alert( error, "modification non" )
    }
}

  const handleEdit = (idEdit) => {
    setid(idEdit)
    const dataEdit = data.filter((value) => value.id===idEdit)
    settitle(dataEdit[0].title)
    setingr(dataEdit[0].ingredient)
    setdesc(dataEdit[0].description)
    setimgUrl(dataEdit[0].imageUrl)
    seteditTest(true)
    console.log(dataEdit);
  }

  useEffect(()=> {
    if (!localStorage.getItem("check")) {
        window.location.href = "/"
      }
      console.log("ici");
      fetch(user_id)

      
    },[])


    // recuperation des données
   

    const handleChangeFile = (e)=> {
      if (e.target.files[0]) {
        setimg(e.target.files[0]);
      }
    }
    const add = async (url)=>{
      const addData = await addDoc( dbRef, {
        user_id: user_id,
        title: title,
        ingredient: ingr,
        description: desc,
        imageUrl: url
      } )
      if( addData ){
          alert( "ajout reussie" )
          window.location.reload()
      }else{
          alert( "error" )
      }
  }
  const submit = () => {
    // Créez une référence au fichier dans Firebase Storage
    const storageRef = ref(storage, img.name);
    // Téléchargez le fichier
    const uploadTask = uploadBytesResumable(storageRef, img);

    // Gérez les événements de progression
    uploadTask.on("state_changed",
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Téléchargement en cours : ${progress}%`);
        },
        (error) => {
            console.error("Erreur lors du téléchargement :", error);
        },
        () => {
            // Récupérez l'URL de téléchargement après le succès
            getDownloadURL(uploadTask.snapshot.ref).then((downloadedURL) => {
                console.log("URL de téléchargement :", downloadedURL);
                // Vous pouvez maintenant utiliser cette URL dans votre application
                setimgUrl(downloadedURL)
                
                add(downloadedURL)
            });
        }
    );
};

    // Suppression des donnée
     
    const sup = async ()=> {
      const delref = doc(dbRef, id)
      try {
          await deleteDoc(delref)
          window.location.reload()
      } catch (error) {
          alert(error)
      }
  }
  const handleDelete = (idSup)=> {
      if(confirm("Etes vous sur de supprimer")) {
          setid(idSup)
          sup()
      }
   }
  return (
    <div className='blog_page'>
  {/* loader  */}
  <Loader />
    {/* end loader */}
  <div className="wrapper">
    <Sidebar />
    <div id="content">
      {/* header */}
     <Header />
      {/* end header */}
      <div className="yellow_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>Our recettes</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <i>
                  <img src="images/title.png" alt="#" />
                </i>
                <span>
                  when looking at its layout. The point of using Lorem
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((dat, key) => (
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom">
                <div className="blog_box">
                  <div className="blog_img_box">
                    <figure>
                      <img src={dat.imageUrl} alt="#" />
                      <span>02 FEB 2019</span>
                    </figure>
                  </div>
                  <h3>{dat.title}</h3>
                  <p>
                     {dat.description} <br />
                     <button className='btn btn-warning me-2' onClick={()=>handleEdit(dat.id)}>edit</button>
                     <button className='btn btn-danger' onClick={()=>handleDelete(dat.id)}>delete</button>
                  </p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      {/* end blog */}
      {/* footer */}
      <fooetr>
        <div className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className=" col-md-12">
                <h2>
                  Request A<strong className="white"> Call Back</strong>
                </h2>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="main_form">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Title"
                        type="text"
                        value={title}
                        onChange={(e) => settitle(e.target.value)}    
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Ingredient"
                        type="text"
                        name="ingredient"
                        value={ingr}
                        onChange={(e) => setingr(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <textarea
                        className="textarea"
                        placeholder="Message"
                        type="text"
                        name="Message"
                        defaultValue={""}
                        value={desc}
                        onChange={(e) => setdesc(e.target.value)}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        type="file"
                        name="Photo de profile"
                        // value={img}
                        onChange={handleChangeFile}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      {!editTest && (<button className="send" onClick={submit}>Send</button>)}
                      {editTest && (<button className="send" onClick={update}>Modifier</button>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="img-box">
                  <figure>
                    <img src="images/img.jpg" alt="img" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="footer_logo">
                  <a href="index.html">
                    <img src="images/logo1.jpg" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-12">
                <ul className="lik">
                  <li>
                    {" "}
                    <a href="/">Home</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/about">About</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/recipe">Recipe</a>
                  </li>
                  <li className="active">
                    {" "}
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    {" "}
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <p>
                © 2019 All Rights Reserved. Design by
                <a href="https://html.design/"> Free Html Templates</a>
              </p>
            </div>
          </div>
        </div>
      </fooetr>
      {/* end footer */}
    </div>
  </div>
  <div className="overlay" />
</div>

  )
}

export default Blog