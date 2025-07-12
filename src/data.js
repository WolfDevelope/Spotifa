// src/data.js

const data = {
  // 1. Các bài hát (đã hợp nhất và chuẩn hóa)
  songs: [
    {
      id: 'song-1',
      title: "In Your Eyes",
      artistId: 'artist-1', // ID của The Weeknd
      albumId: 'album-2', // ID của Beauty Behind the Madness
      cover: "assets/images/The_Weeknd_-_In_Your_Eyes_(Kenny_G_Remix).png",
      src: "assets/music/The Weeknd - In Your Eyes ft. Kenny G (Official Live Performance) - Vevo.mp3",
      duration: "3:45",
      lyrics: "Lời bài hát In Your Eyes..."
    },
    {
      id: 'song-2',
      title: "Sky Fall",
      artistId: 'artist-3', // ID của Adele
      albumId: 'album-1', // ID của Adele 21
      cover: "assets/images/Rectangle 19.png",
      src: "assets/music/Adele - Skyfall (Official Lyric Video).mp3",
      duration: "4:00", // Thêm duration nếu chưa có
      lyrics: "Lời bài hát Sky Fall..."
    },
    {
      id: 'song-3',
      title: "That So True",
      artistId: 'artist-6', // ID của Gracie Abrams
      // Album ID có thể là một album mới hoặc một album hiện có nếu phù hợp
      cover: "assets/images/that so true.jpg",
      src: "assets/music/Gracie Abrams - Thats So True (Official Lyric Video).mp3",
      duration: "3:00", // Thêm duration
      lyrics: "Lời bài hát That So True..."
    },
    {
      id: 'song-4',
      title: "Azizam",
      artistId: 'artist-10', // ID của Ed Sheeran
      // Album ID nếu có
      cover: "assets/images/azizam.jpg",
      src: "assets/music/Ed Sheeran - Azizam (Official Music Video).mp3",
      duration: "3:30",
      lyrics: "Lời bài hát Azizam..."
    },
    {
      id: 'song-5',
      title: "Take Me Back To LA",
      artistId: 'artist-1', // ID của The Weeknd
      albumId: 'album-2', // Cùng album Beauty Behind the Madness
      cover: "assets/images/take me back to la.png",
      src: "assets/music/The Weeknd - Take Me Back To LA (Audio).mp3",
      duration: "4:20",
      lyrics: "Lời bài hát Take Me Back To LA..."
    },
    {
      id: 'song-6',
      title: "High Fashion",
      artistId: 'artist-11', // ID của Addison Rae
      cover: "assets/images/High Fashion.avif",
      src: "assets/music/Addison Rae - High Fashion (Official Video).mp3",
      duration: "2:50"
    },
    {
      id: 'song-7',
      title: "Birds of a Feather",
      artistId: 'artist-7', // ID của Billie Eilish
      cover: "assets/images/Birds of a Feather.webp",
      src: "assets/music/Billie Eilish - BIRDS OF A FEATHER (Official Music Video).mp3",
      duration: "3:15"
    },
    {
      id: 'song-8',
      title: "Illusion",
      artistId: 'artist-12', // ID của Dua Lipa
      cover: "assets/images/illusion.png",
      src: "assets/music/Dua Lipa - Illusion (Official Music Video).mp3",
      duration: "3:07"
    },
    {
      id: 'song-9',
      title: "Die With A Smile",
      artistId: 'artist-13', // ID của Lady Gaga & Bruno Mars (cần tạo 1 artist cho cặp này hoặc 2 artist riêng)
      cover: "assets/images/Die With A Smile.jpg",
      src: "assets/music/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).mp3",
      duration: "3:20"
    },
    {
      id: 'song-10',
      title: "Espresso",
      artistId: 'artist-8', // ID của Sabrina Carpenter
      cover: "assets/images/Espresso.jpg",
      src: "assets/music/Espresso.mp3",
      duration: "2:55"
    },
    {
      id: 'song-11',
      title: "Sorfcore",
      artistId: 'artist-14', // ID của The neighborhood
      albumId: 'album-6', // ID của Hard to Imagine the Neighbourhood Ever Changing
      cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 1.png",
      releaseDate: "Nov 4, 2023",
      duration: "3:26"
    },
    {
      id: 'song-12',
      title: "Skyfall Beats",
      artistId: 'artist-15', // ID của nightmares
      albumId: 'album-7', // ID của nightmares album
      cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 2.png",
      releaseDate: "Oct 26, 2023",
      duration: "2:45"
    },
    {
      id: 'song-13',
      title: "Greedy",
      artistId: 'artist-16', // ID của tate mcrae
      albumId: 'album-8', // ID của Greedy album
      cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 3.png",
      releaseDate: "Dec 30, 2023",
      duration: "2:11"
    },
    {
      id: 'song-14',
      title: "Lovin On me",
      artistId: 'artist-17', // ID của jack harlow
      albumId: 'album-9', // ID của Lovin On me album
      cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 4.png",
      releaseDate: "Dec 30, 2023",
      duration: "2:18"
    },
    {
      id: 'song-15',
      title: "pain the town red",
      artistId: 'artist-18', // ID của Doja Cat
      albumId: 'album-10', // ID của Paint The Town Red album
      cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 5.png",
      releaseDate: "Dec 29, 2023",
      duration: "3:51"
    },
    {
      id: 'song-16',
      title: "Dancin On Night",
      artistId: 'artist-12', // ID của Dualipa (Dua Lipa)
      albumId: 'album-11', // ID của Dance The Night(From Barbie Movie)
      cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 6.png",
      releaseDate: "may 27, 2023",
      duration: "2:56"
    },
    {
      id: 'song-17',
      title: "Water",
      artistId: 'artist-19', // ID của Tyla
      albumId: 'album-12', // ID của Water album
      cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 7.png",
      releaseDate: "Dec 10, 2023",
      duration: "3:20"
    },
    // Thêm các bài hát từ Music Videos nếu bạn muốn chúng có trang chi tiết bài hát
    {
        id: 'song-18',
        title: "Gossip",
        artistId: 'artist-20', // ID của Måneskin
        cover: "assets/images/Gossip mv.png",
        // views: "231K", // Views có thể là một trường khác hoặc không cần ở đây
        duration: "3:00" // Giả định
    },
    {
        id: 'song-19',
        title: "Shape Of You",
        artistId: 'artist-10', // ID của Ed Sheeran
        cover: "assets/images/Shape of you mv.png",
        duration: "3:53" // Giả định
    },
    {
        id: 'song-20',
        title: "Someone Like You",
        artistId: 'artist-3', // ID của Adele
        cover: "assets/images/Someone like you mv.png",
        duration: "4:45" // Giả định
    },
    {
        id: 'song-21',
        title: "Roar",
        artistId: 'artist-21', // ID của Katy Perry
        cover: "assets/images/Roar mv.png",
        duration: "3:43" // Giả định
    },
    {
        id: 'song-22',
        title: "Shake It Off",
        artistId: 'artist-22', // ID của Taylor Swift
        cover: "assets/images/Shake it off mv.png",
        duration: "3:39" // Giả định
    },
    {
        id: 'song-23',
        title: "New Rules",
        artistId: 'artist-12', // ID của Dua Lipa
        cover: "assets/images/New rules mv.png",
        duration: "3:29" // Giả định
    },
    {
        id: 'song-24',
        title: "Waka Waka",
        artistId: 'artist-23', // ID của Shakira
        cover: "assets/images/Waka waka mv.png",
        duration: "3:22" // Giả định
    },
  ],

  // 2. Các Albums (đã hợp nhất và chuẩn hóa)
  albums: [
    {
      id: 'album-1',
      name: "21", // Tên album thực tế
      artistId: 'artist-3', // ID của Adele
      cover: "assets/images/Rectangle 17.png",
      year: "2011", // Năm phát hành thực tế
      songIds: ['song-2', 'song-20'] // Các bài hát trong album này
    },
    {
      id: 'album-2',
      name: "Beauty Behind the Madness",
      artistId: 'artist-1', // ID của The Weeknd
      cover: "assets/images/Rectangle 17 (1).png",
      year: "2015",
      songIds: ['song-1', 'song-5'] // Các bài hát trong album này
    },
    {
      id: 'album-3',
      name: "Scorpion",
      artistId: 'artist-24', // ID của Drake
      cover: "assets/images/Rectangle 17 (2).png",
      year: "2018",
      songIds: [] // Thêm ID bài hát nếu có
    },
    {
      id: 'album-4',
      name: "Harry's House",
      artistId: 'artist-5', // ID của Harry Styles
      cover: "assets/images/Rectangle 17 (3).png",
      year: "2022",
      songIds: [] // Thêm ID bài hát nếu có
    },
    {
      id: 'album-5',
      name: "Born To Die",
      artistId: 'artist-4', // ID của Lana Del Rey
      cover: "assets/images/Rectangle 17 (4).png",
      year: "2012",
      songIds: [] // Thêm ID bài hát nếu có
    },
    // Album từ trendingSongs
    {
        id: 'album-6',
        name: "Hard to Imagine the Neighbourhood Ever Changing",
        artistId: 'artist-14',
        cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 1.png",
        year: "2018", // Giả định năm
        songIds: ['song-11']
    },
    {
        id: 'album-7',
        name: "nightmares",
        artistId: 'artist-15',
        cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 2.png",
        year: "2023", // Giả định năm
        songIds: ['song-12']
    },
    {
        id: 'album-8',
        name: "Greedy",
        artistId: 'artist-16',
        cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 3.png",
        year: "2023",
        songIds: ['song-13']
    },
    {
        id: 'album-9',
        name: "Lovin On me",
        artistId: 'artist-17',
        cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 4.png",
        year: "2023",
        songIds: ['song-14']
    },
    {
        id: 'album-10',
        name: "Paint The Town Red",
        artistId: 'artist-18',
        cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 5.png",
        year: "2023",
        songIds: ['song-15']
    },
    {
        id: 'album-11',
        name: "Dance The Night (From Barbie Movie)",
        artistId: 'artist-12',
        cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 6.png",
        year: "2023",
        songIds: ['song-16']
    },
    {
        id: 'album-12',
        name: "Water",
        artistId: 'artist-19',
        cover: "assets/images/The_Neighbourhood_-_The_Neighbourhood 7.png",
        year: "2023",
        songIds: ['song-17']
    },
    // Các album mới
    { id: 'album-13', name: "I Got Heaven", artistId: 'artist-25', cover: "assets/images/I Got Heaven.png", year: "2024", songIds: [] },
    { id: 'album-14', name: "Saviors", artistId: 'artist-26', cover: "assets/images/Greenday.png", year: "2024", songIds: [] },
    { id: 'album-15', name: "Loss of Life", artistId: 'artist-27', cover: "assets/images/Loss of Life.png", year: "2024", songIds: [] },
    { id: 'album-16', name: "All Quiet on the Eastern Esplanade", artistId: 'artist-28', cover: "assets/images/All Quiet on the Eastern Esplanade.png", year: "2024", songIds: [] },
    { id: 'album-17', name: "Little Rope", artistId: 'artist-29', cover: "assets/images/Little Rope.png", year: "2024", songIds: [] },
    { id: 'album-18', name: "The Tortured Poets Department", artistId: 'artist-22', cover: "assets/images/The Tortured Poets Department.jpg", year: "2024", songIds: [] },
    { id: 'album-19', name: "Eternal Sunshine", artistId: 'artist-30', cover: "assets/images/Eternal Sunshine.jpg", year: "2024", songIds: [] },
    { id: 'album-20', name: "Room Under the Stairs", artistId: 'artist-31', cover: "assets/images/Room Under the Stairs.jpg", year: "2024", songIds: [] },
    { id: 'album-21', name: "Radical Optimism", artistId: 'artist-12', cover: "assets/images/Radical Optimism.jpg", year: "2024", songIds: [] },
    { id: 'album-22', name: "Blue Electric Light", artistId: 'artist-32', cover: "assets/images/Blue Electric Light.jpg", year: "2024", songIds: [] },
    // Các album phổ biến
    { id: 'album-23', name: "1989 (Taylor’s Version)", artistId: 'artist-22', cover: "assets/images/1989 (Taylor’s Version).jpg", year: "2023", songIds: [] },
    { id: 'album-24', name: "After Hours", artistId: 'artist-1', cover: "assets/images/After Hours.jpg", year: "2020", songIds: [] },
    { id: 'album-25', name: "Fine Line", artistId: 'artist-5', cover: "assets/images/Fine Line.jpg", year: "2019", songIds: [] },
    { id: 'album-26', name: "Future Nostalgia", artistId: 'artist-12', cover: "assets/images/Future Nostalgia.jpg", year: "2020", songIds: [] },
    { id: 'album-27', name: "Divide (÷)", artistId: 'artist-10', cover: "assets/images/Divide.jpg", year: "2017", songIds: [] },

    // Các playlist/mix albums, chúng ta sẽ coi chúng là "album" nhưng có thể không có artist cụ thể
    // Lưu ý: ID của bạn đang trùng lặp giữa các loại album, tôi sẽ sửa lại để đảm bảo duy nhất
    { id: 'album-mix-1', name: "Trending songs mix", cover: "assets/images/1600w-v8lIutrL57g 1.png", description: "Sad Playlist", artistId: 'various-artists', songIds: [] },
    { id: 'album-mix-2', name: "Today's Top Hits", cover: "assets/images/Today's Top Hits.jpg", description: "Today's Top Hits Playlist", artistId: 'various-artists', songIds: [] },
    { id: 'album-mix-3', name: "Pop Rising", cover: "assets/images/Pop Rising.jpg", description: "Pop Rising Playlist", artistId: 'various-artists', songIds: [] },
    { id: 'album-mix-4', name: "All Out 2010s", cover: "assets/images/All Out 2010s.jpg", description: "All Out 2010s Playlist", artistId: 'various-artists', songIds: [] },
    { id: 'album-mix-5', name: "Rock Classics", cover: "assets/images/Rock Classics.jpg", description: "Rock Classics Playlist", artistId: 'various-artists', songIds: [] }
  ],

  // 3. Các Nghệ sĩ (đã hợp nhất và chuẩn hóa)
  artists: [
    { id: 'artist-1', name: "The Weeknd", avatar: "assets/images/the weekend.jpg", bio: "The Weeknd là một ca sĩ, nhạc sĩ, nhà sản xuất thu âm người Canada. Anh ấy được biết đến với phong cách âm nhạc đa dạng...", songIds: ['song-1', 'song-5'], albumIds: ['album-2', 'album-24'] },
    { id: 'artist-2', name: "Imagine Dragons", avatar: "assets/images/69824 3.png", bio: "Imagine Dragons là một ban nhạc pop rock Mỹ.", songIds: [], albumIds: [] },
    { id: 'artist-3', name: "Adele", avatar: "assets/images/69824 4.png", bio: "Adele là một ca sĩ và nhạc sĩ người Anh. Cô ấy nổi tiếng với giọng hát mạnh mẽ và các bản ballad đầy cảm xúc.", songIds: ['song-2', 'song-20'], albumIds: ['album-1'] },
    { id: 'artist-4', name: "Lana Del Rey", avatar: "assets/images/69824 5.png", bio: "Lana Del Rey là một ca sĩ, nhạc sĩ người Mỹ, được biết đến với phong cách điện ảnh và chủ đề bi kịch lãng mạn.", songIds: [], albumIds: ['album-5'] },
    { id: 'artist-5', name: "Harry Styles", avatar: "assets/images/69824 6.png", bio: "Harry Styles là một ca sĩ, nhạc sĩ người Anh và diễn viên. Anh ấy nổi tiếng với phong cách thời trang độc đáo và âm nhạc pop-rock.", songIds: [], albumIds: ['album-4', 'album-25'] },
    { id: 'artist-6', name: "Billie Eilish", avatar: "assets/images/69824 7.png", bio: "Billie Eilish là một ca sĩ, nhạc sĩ người Mỹ. Cô ấy nổi tiếng với phong cách âm nhạc dark pop và lời bài hát nội tâm.", songIds: ['song-7'], albumIds: [] },
    // Các nghệ sĩ mới từ dữ liệu của bạn (nếu không có ID, tôi sẽ tạo ID tạm)
    { id: 'artist-7', name: "Gracie Abrams", avatar: "assets/images/Gracie Abrams.jpg", bio: "Gracie Abrams là một ca sĩ-nhạc sĩ người Mỹ nổi tiếng với những bản pop indie chân thật.", songIds: ['song-3'], albumIds: [] },
    { id: 'artist-8', name: "Sabrina Carpenter", avatar: "assets/images/Sabrina Carpenter.jpg", bio: "Sabrina Carpenter là một ca sĩ và nữ diễn viên người Mỹ.", songIds: ['song-10'], albumIds: [] },
    { id: 'artist-9', name: "Ed Sheeran", avatar: "assets/images/Divide.jpg", bio: "Ed Sheeran là một ca sĩ, nhạc sĩ người Anh. Anh ấy nổi tiếng với những bản nhạc pop acoustic.", songIds: ['song-4', 'song-19'], albumIds: ['album-27'] },
    { id: 'artist-10', name: "Addison Rae", avatar: "assets/images/High Fashion.avif", bio: "Addison Rae là một nhân vật truyền thông xã hội và ca sĩ người Mỹ.", songIds: ['song-6'], albumIds: [] },
    { id: 'artist-11', name: "Dua Lipa", avatar: "assets/images/Future Nostalgia.jpg", bio: "Dua Lipa là một ca sĩ, nhạc sĩ người Anh. Cô ấy được biết đến với âm nhạc pop phong cách disco.", songIds: ['song-8', 'song-16', 'song-23'], albumIds: ['album-21', 'album-26'] },
    { id: 'artist-12', name: "Lady Gaga & Bruno Mars", avatar: "assets/images/Die With A Smile.jpg", bio: "Lady Gaga và Bruno Mars là hai nghệ sĩ nổi tiếng đã hợp tác trong bản hit Die With A Smile.", songIds: ['song-9'], albumIds: [] },
    { id: 'artist-13', name: "The neighborhood", avatar: "assets/images/The_Neighbourhood_-_The_Neighbourhood 1.png", bio: "The Neighbourhood là một ban nhạc alternative rock người Mỹ.", songIds: ['song-11'], albumIds: ['album-6'] },
    { id: 'artist-14', name: "nightmares", avatar: "assets/images/The_Neighbourhood_-_The_Neighbourhood 2.png", bio: "Nightmares là một nghệ sĩ âm nhạc được biết đến với các bản beat điện tử.", songIds: ['song-12'], albumIds: ['album-7'] },
    { id: 'artist-15', name: "tate mcrae", avatar: "assets/images/The_Neighbourhood_-_The_Neighbourhood 3.png", bio: "Tate McRae là một ca sĩ, nhạc sĩ và vũ công người Canada.", songIds: ['song-13'], albumIds: ['album-8'] },
    { id: 'artist-16', name: "jack harlow", avatar: "assets/images/The_Neighbourhood_-_The_Neighbourhood 4.png", bio: "Jack Harlow là một rapper người Mỹ.", songIds: ['song-14'], albumIds: ['album-9'] },
    { id: 'artist-17', name: "Doja Cat", avatar: "assets/images/The_Neighbourhood_-_The_Neighbourhood 5.png", bio: "Doja Cat là một rapper, ca sĩ, nhạc sĩ và nhà sản xuất thu âm người Mỹ.", songIds: ['song-15'], albumIds: ['album-10'] },
    { id: 'artist-18', name: "Tyla", avatar: "assets/images/The_Neighbourhood_-_The_Neighbourhood 7.png", bio: "Tyla là một ca sĩ, nhạc sĩ người Nam Phi.", songIds: ['song-17'], albumIds: ['album-12'] },
    { id: 'artist-19', name: "Måneskin", avatar: "assets/images/Gossip mv.png", bio: "Måneskin là một ban nhạc rock người Ý.", songIds: ['song-18'], albumIds: [] },
    { id: 'artist-20', name: "Katy Perry", avatar: "assets/images/Roar mv.png", bio: "Katy Perry là một ca sĩ, nhạc sĩ người Mỹ, nổi tiếng với âm nhạc pop vui tươi và đầy màu sắc.", songIds: ['song-21'], albumIds: [] },
    { id: 'artist-21', name: "Taylor Swift", avatar: "assets/images/The Tortured Poets Department.jpg", bio: "Taylor Swift là một trong những nghệ sĩ bán chạy nhất mọi thời đại.", songIds: ['song-22'], albumIds: ['album-18', 'album-23'] },
    { id: 'artist-22', name: "Shakira", avatar: "assets/images/Waka waka mv.png", bio: "Shakira là một ca sĩ, nhạc sĩ, vũ công, nhà sản xuất thu âm và doanh nhân người Colombia.", songIds: ['song-24'], albumIds: [] },
    { id: 'artist-23', name: "Drake", avatar: "assets/images/Rectangle 17 (2).png", bio: "Drake là một rapper, ca sĩ, nhạc sĩ, nhà sản xuất thu âm người Canada.", songIds: [], albumIds: ['album-3'] },
    // Các nghệ sĩ từ New Albums (tạo ID mới nếu chưa có)
    { id: 'artist-24', name: "Mannequin", avatar: "assets/images/I Got Heaven.png", bio: "", songIds: [], albumIds: ['album-13'] },
    { id: 'artist-25', name: "Green Day", avatar: "assets/images/Greenday.png", bio: "", songIds: [], albumIds: ['album-14'] },
    { id: 'artist-26', name: "MGMT", avatar: "assets/images/Loss of Life.png", bio: "", songIds: [], albumIds: ['album-15'] },
    { id: 'artist-27', name: "The Libertines", avatar: "assets/images/All Quiet on the Eastern Esplanade.png", bio: "", songIds: [], albumIds: ['album-16'] },
    { id: 'artist-28', name: "Sleater-Kinney", avatar: "assets/images/Little Rope.png", bio: "", songIds: [], albumIds: ['album-17'] },
    { id: 'artist-29', name: "Ariana Grande", avatar: "assets/images/Eternal Sunshine.jpg", bio: "", songIds: [], albumIds: ['album-19'] },
    { id: 'artist-30', name: "Zayn", avatar: "assets/images/Room Under the Stairs.jpg", bio: "", songIds: [], albumIds: ['album-20'] },
    { id: 'artist-31', name: "Lenny Kravitz", avatar: "assets/images/Blue Electric Light.jpg", bio: "", songIds: [], albumIds: ['album-22'] },
    // Các nghệ sĩ khác bạn có trong dữ liệu (Emerging Pop Artists, Rising Alternative/Indie Artists, Recently Viral Artists)
    // Cần kiểm tra xem họ đã có trong danh sách trên chưa để tránh trùng lặp.
    // Nếu chưa, thêm họ vào đây với ID mới và info cần thiết.
    { id: 'artist-32', name: "Zach Bryan", avatar: "assets/images/Zach Bryan.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-33', name: "Ice Spice", avatar: "assets/images/Ice Spice.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-34', name: "Jax", avatar: "assets/images/Jax.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-35', name: "Lauren Spencer-Smith", avatar: "assets/images/Lauren Spencer-Smith.jpg", bio: "", songIds: [], albumIds: [] },
    // Gracie Abrams đã có: artist-7
    { id: 'artist-36', name: "Declan McKenna", avatar: "assets/images/Declan McKenna.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-37', name: "Reneé Rapp", avatar: "assets/images/Reneé Rapp.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-38', name: "Noah Kahan", avatar: "assets/images/Noah Kahan.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-39', name: "Holly Humberstone", avatar: "assets/images/Holly Humberstone.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-40', name: "Girl in Red", avatar: "assets/images/Girl in Red.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-41', name: "Peso Pluma", avatar: "assets/images/Peso Pluma.jpg", bio: "", songIds: [], albumIds: [] },
    // Sabrina Carpenter đã có: artist-8
    { id: 'artist-42', name: "Jelly Roll", avatar: "assets/images/Jelly Roll.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-43', name: "Kai Cenat", avatar: "assets/images/Kai Cenat.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-44', name: "Chappell Roan", avatar: "assets/images/Chappell Roan.jpg", bio: "", songIds: [], albumIds: [] },
    { id: 'artist-45', name: "Fred Again..", avatar: "assets/images/Fred Again.jpg", bio: "", songIds: [], albumIds: [] },
    // Một nghệ sĩ chung cho các playlist/mix
    { id: 'various-artists', name: "Various Artists", avatar: "assets/images/default_artist_avatar.png", bio: "Tập hợp các nghệ sĩ khác nhau.", songIds: [], albumIds: ['album-mix-1', 'album-mix-2', 'album-mix-3', 'album-mix-4', 'album-mix-5'] },
  ],

  // 4. Các danh sách nhóm (chỉ chứa ID)
  weeklyTopSongs: ['song-1', 'song-2', 'song-3', 'song-4', 'song-5'],
  newReleaseSongs: ['song-6', 'song-7', 'song-8', 'song-9', 'song-10'], // Thêm ID của các bài hát mới
  trendingSongs: ['song-11', 'song-12', 'song-13', 'song-14', 'song-15', 'song-16', 'song-17'],
  musicVideos: ['song-18', 'song-19', 'song-20', 'song-21', 'song-22', 'song-23', 'song-24'], // Chuyển đổi MV thành ID bài hát nếu bạn muốn MV cũng có trang chi tiết bài hát
  
  popularArtists: ['artist-1', 'artist-2', 'artist-3', 'artist-4', 'artist-5', 'artist-6'],
  emergingPopArtists: ['artist-32', 'artist-33', 'artist-34', 'artist-35', 'artist-7', 'artist-36'],
  risingAlternativeIndieArtists: ['artist-37', 'artist-38', 'artist-36', 'artist-39', 'artist-40', 'artist-41'],
  recentlyViralArtists: ['artist-8', 'artist-42', 'artist-43', 'artist-41', 'artist-44', 'artist-45'],

  topAlbums: ['album-1', 'album-2', 'album-3', 'album-4', 'album-5'],
  newAlbums: ['album-13', 'album-14', 'album-15', 'album-16', 'album-17', 'album-18', 'album-19', 'album-20', 'album-21', 'album-22'],
  popularAlbums: ['album-23', 'album-24', 'album-25', 'album-26', 'album-27'],
  mixAlbums: ['album-mix-1', 'album-mix-2', 'album-mix-3', 'album-mix-4', 'album-mix-5'],

  // Các mục khác không liên quan trực tiếp đến trang chi tiết bài hát/album/nghệ sĩ có thể giữ nguyên
  moodPlaylists: [
    { id: 1, name: "Sad Songs", cover: "assets/images/Rectangle 17 copy.png", description: "Sad Playlist" },
    { id: 2, name: "Chill Songs", cover: "assets/images/Rectangle 17 (1) copy.png", description: "Chill Playlist" },
    { id: 3, name: "Workout Songs", cover: "assets/images/Rectangle 17 (2) copy.png", description: "Workout Songs" },
    { id: 4, name: "Love songs", cover: "assets/images/Rectangle 17 (3) copy.png", description: "Love Playlist" },
    { id: 5, name: "Happy Songs", cover: "assets/images/Rectangle 17 (4) copy.png", description: "Happy Songs" }
  ],
  musicGenres: [
    { id: 1, name: "Rap Tracks", cover: "assets/images/Rectangle 39.png" },
    { id: 2, name: "Pop Tracks", cover: "assets/images/Rectangle 40.png" },
    { id: 3, name: "Rock Tracks", cover: "assets/images/Rectangle 41.png" },
    { id: 4, name: "Classic Tracks", cover: "assets/images/Rectangle 42.png" }
  ],
};

export default data;