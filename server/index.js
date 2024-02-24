const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/animeRoutes')
const animeModel = require('./models/animeModel')
const categoryModel = require('./models/categoryModel')

dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/user',userRoutes)
app.use('/post',postRoutes)

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
//     const NewCourse = new animeModel({
//       AnimeName: "Steins;Gate",
//       AnimeDesc: "After discovering time travel, a university student and his friends must use their knowledge of it to prevent an evil organization's schemes and the impending apocalypse.",
//       AnimeImg: "https://example.com/steins_gate.jpg",
//       AnimeTitle: "Steins;Gate",
//       Detail: [{
//           AnimeVideoPreview: "https://example.com/steins_gate_preview.mp4",
//           AnimeType: "TV",
//           AnimeEpisode: 24,
//           AnimeStatus: "Finished",
//           AnimeAired: new Date("2011-04-06"),
//           AnimePremiered: "Spring 2011",
//           AnimeProducers: "TV Tokyo, Media Factory, Kadokawa Shoten, AT-X, Movic, Nitroplus, Hakuhodo DY Media Partners, MAGES., Sentai Filmworks",
//           AnimeLicensors: "Funimation, Kadokawa Pictures USA",
//           AnimeStudios: "White Fox",
//           AnimeSource: "Visual novel",
//           AnimeGenres: "Thriller, Sci-Fi",
//           AnimeThemes: "Time Travel, Conspiracy, Psychological",
//           AnimeDemographic: "Seinen",
//           AnimeDuration: "24 min. per episode",
//           AnimeRating: "PG-13 - Teens 13 or older"
//       }],
//       AnimeCategory: "621d43f0a0738c7e43e2ee20",
//       UserId: "621d43f0a0738c7e43e2ee1e",
//       viewCount: 1800000
//     })
//     // NewCourse.save()
// }
