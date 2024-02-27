const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/animeRoutes')
const ReccomendRoutes = require('./routes/recommendRoutes')
const commentRoutes = require('./routes/commentRoutes')
const animeModel = require('./models/animeModel')
const categoryModel = require('./models/categoryModel')

dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/user',userRoutes)
app.use('/post',postRoutes)
app.use('/recom',ReccomendRoutes)
app.use('/comment',commentRoutes)

app.listen(process.env.PORT,()=>{
  console.log(`Server running in port ${process.env.PORT}`);
})

mongoose.connect(process.env.MONGO_URL)
  .then(()=>{
    console.log('Database Connection Successfully');
  }).catch((err)=>{
    console.error(err);
})

// for ( i = 0 ; i <5 ; i++){
//     const NewCourse = new animeModel({
//       UserName : 'การทำเสนอเพื่อเพิ่มโอกาสปิดการขาย',
//       PassWord : '3155454g4',
//       FirstName : 'erypimyveji',
//       LastName : 'qweqwezcewc',
//       img_user : 'https://www.thaipr.net/wp-content/uploads/2023/01/Copy-of-1200x800-5265af37.jpeg',
//       Email : 'sirapat@mail.com',
//       Role : 'user'
//     })
//     NewCourse.save()
// }

// for ( i = 0 ; i <1 ; i++){
    // const NewCourse = new animeModel({
    //   AnimeName: "Mushoku Tensei: Jobless Reincarnation",
    //   AnimeDesc: "Mushoku Tensei follows the story of a 34-year-old NEET who is kicked out of his house and has no motivation for life. After an encounter with a truck, he is reincarnated into a magical world as Rudeus Greyrat, a baby with new chances in life.",
    //   AnimeImg: "https://thethaiger.com/th/wp-content/uploads/2023/07/%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B8%8B%E0%B8%B5%E0%B8%8B%E0%B8%B1%E0%B8%99-2.png",
    //   Detail: {
    //     AnimeVideoPreview: "https://example.com/mushoku-tensei-preview.mp4",
    //     AnimeType: "TV",
    //     AnimeEpisode: 11,
    //     AnimeStatus: "Ongoing",
    //     AnimeAired: new Date("2021-01-11"),
    //     AnimePremiered: "Winter 2021",
    //     AnimeProducers: "Egg Firm",
    //     AnimeLicensors: "Funimation",
    //     AnimeStudios: "Studio Bind",
    //     AnimeSource: "Light Novel",
    //     AnimeGenres: "Drama, Fantasy, Magic",
    //     AnimeThemes: "Reincarnation, Isekai",
    //     AnimeDemographic: "Seinen",
    //     AnimeDuration: "23 min. per ep.",
    //     AnimeRating: "R"
    //   },
    //   AnimeCategory: "65d9b26e1ec05f5be9bd4aa8",
    //   UserId: "65d9b26e1ec05f5be9bd4aa8",
    //   viewCount: 9500
    // })
    // NewCourse.save()
// }
