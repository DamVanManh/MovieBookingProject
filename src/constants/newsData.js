const newsData = [
  {
    id: "1",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/06/rom-phim-thang-giai-cao-nhat-tai-lhp-quoc-te-busan-an-dinh-ngay-ra-rap-tai-viet-nam-15910933229816.png",
    tieuDe:
      "Rờm - Phim thắng giải cao nhất tại LHP quốc tế Busan ấn định ngày ra rạp tại Việt Nam",
    noiDung:
      "Sau khi chính thức được cấp giấy phép phát hành, bộ phim Ròm của đạo diễn Trần Thanh Huy thông báo ngày khởi chiếu tại Việt Nam vào cuối tháng 7 tới đây.",
    like: 14,
    comment: 62,
    link:
      "https://tix.vn/goc-dien-anh/7925-rom-phim-thang-giai-cao-nhat-tai-lhp-quoc-te-busan-an-dinh-ngay-ra-rap-tai-viet-nam",
  },
  {
    id: "2",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/05/quang-tuan-thuong-tu-ky-tren-phim-truong-de-tap-trung-dien-vai-toi-pham-15906671009175.png",
    tieuDe:
      "Quang Tuấn thường 'tự kỷ' trên phim trường để tập trung diễn vai tội phạm",
    noiDung:
      "Lần thứ 2 vào vai phản diện trên màn ảnh, Quang Tuấn mang đến một hình ảnh hoàn toàn khác với nhân vật tên tội phạm biến thái có vỏ bọc tri thức.",
    like: 89,
    comment: 31,
    link:
      "https://tix.vn/goc-dien-anh/7923-quang-tuan-thuong-tu-ky-tren-phim-truong-de-tap-trung-dien-vai-toi-pham",
  },
  {
    id: "3",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/05/phim-cho-ca-gia-dinh-vui-ve-nhan-dip-le-quoc-te-thieu-nhi-1-6-15905643444860.png",
    tieuDe: "Phim cho cả gia định vui vẻ nhân dịp lễ Quốc Tế Thiếu Nhi 1/6",
    noiDung:
      "Phim chiếu rạp dịp Quốc tế Thiếu nhi của năm 2020 có phần kém sôi động hơn những năm trước nhưng không vì vậy mà khán giả nhỏ tuổi bị “ngó lơ”. Cùng điểm qua hai tựa phim hoạt hình đầy màu sắc phiêu lưu, đáng yêu và cực kỳ ý nghĩa này nghĩa của mùa Tết thiếu nhi trong cuối tuần này nào!.",
    like: 30,
    comment: 8,
    link:
      "https://tix.vn/goc-dien-anh/7917-phim-cho-ca-gia-dinh-vui-ve-nhan-dip-le-quoc-te-thieu-nhi-1-6",
  },
  {
    id: "4",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/05/antebellum-an-dinh-ngay-khoi-chieu-chinh-thuc-15900552374091.png",
    tieuDe:
      "Xem Căn Phòng Đẫm Máu trước khi quyết định đi chơi hè tại vùng quê hẻo lánh!",
    noiDung:
      "Sở hữu nhiều trường đoạn nhát ma gây ám ảnh, bộ phim “Căn Phòng Đẫm Máu” không phải là lựa chọn phù hợp đối với những ai có tiền sử tim mạch hay huyết áp cao.",
    like: 11,
    comment: 68,
    link:
      "https://tix.vn/goc-dien-anh/7926-xem-can-phong-dam-mau-truoc-khi-quyet-dinh-di-choi-he-tai-vung-que-heo-lanh",
  },
  {
    id: "5",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/05/david-fincher-bac-thay-su-dung-visual-effects-15900518481959.png",
    tieuDe: "David Fincher bậc thầy sử dụng Visual Effects",
    noiDung:
      "Fincher nổi tiếng với các color palette mang tính mạnh mẽ, các câu chuyện không tuân theo một cấu trúc chuẩn mực và các nhân vật có tâm lý phức tạp. Nhưng bên dưới các chuỗi hình ảnh đẹp mắt khiến khán giả chú ý rất nhiều đến nhân vật, những hiệu ứng này thường bị ẩn đi. Lý do mà đạo diễn làm như vậy, theo Williams, là vì ông luôn nghĩ đến việc làm thế nào để hình ảnh giúp kể câu chuyện của ông – và bởi vì Fincher có kỹ năng về mặt kỹ thuật cho phép ông giấu công việc của mình. “Ông biết khi nào và làm thể nào để sử dụng một hiệu ứng một cách hiệu quả nhất.",
    like: 86,
    comment: 33,
    link:
      "https://tix.vn/goc-dien-anh/7915-david-fincher-bac-thay-su-dung-visual-effects",
  },
  {
    id: "6",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/05/antebellum-an-dinh-ngay-khoi-chieu-chinh-thuc-15900552374091.png",
    tieuDe:
      "[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng",
    noiDung:
      "Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Antebellum: Bẫy Thực Tại Kinh Hoàng.",
    like: 92,
    comment: 16,
    link:
      "https://tix.vn/goc-dien-anh/7953-antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang",
  },
  {
    id: "7",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png",
    tieuDe:
      "Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan",
    noiDung:
      "Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan, được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm bạc tỉ chất lượng. ",
    like: 32,
    comment: 72,
    link:
      "https://tix.vn/goc-dien-anh/7951-da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan",
  },
  {
    id: "8",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png",
    tieuDe:
      "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn",
    noiDung:
      "Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động siêu “nặng đô”.",
    like: 87,
    comment: 61,
    link:
      "https://tix.vn/goc-dien-anh/7950-truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han",
  },
  {
    id: "9",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/07/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png",
    tieuDe: "TENET công bố ngày khởi chiếu chính thức tại Việt Nam",
    noiDung:
      "Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.",
    like: 31,
    comment: 79,
    link:
      "https://tix.vn/goc-dien-anh/7943-tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam",
  },
  {
    id: "10",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/07/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943683481617.jpg",
    tieuDe: "Khi phụ nữ không còn ở thế trốn chạy của nạn nhân",
    noiDung:
      "Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình mang đến một góc nhìn mới về hình ảnh những người phụ nữ thời hiện đại. Điều đó được thể hiện qua câu chuyện về hai người phụ nữ cùng hợp sức để vạch mặt tên tội phạm có sở thích bệnh hoạn với phụ nữ.",
    like: 21,
    comment: 34,
    link:
      "https://tix.vn/goc-dien-anh/7941-khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan",
  },
  {
    id: "11",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png",
    tieuDe: "Gerard Butler cùng bồ cũ Deadpool tham gia Greenland",
    noiDung:
      "Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt đại cảnh cháy nổ hoành tráng.",
    like: 94,
    comment: 20,
    link:
      "https://tix.vn/goc-dien-anh/7940-gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland",
  },
  {
    id: "12",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/07/dien-vien-dac-biet-cua-bang-chung-vo-hinh-15937518743844.png",
    tieuDe: "Diễn viên đặc biệt của Bằng Chứng Vô Hình",
    noiDung:
      "Bằng Chứng Vô Hình tiết lộ thêm với khán giả một diễn viên vô cùng đặc biệt, đi diễn như đi chơi và không hề nghe theo sự chỉ đạo của đạo diễn Trịnh Đình Lê Minh. Đó chính là chú chó Ben – trợ thủ đắc lực của cô gái mù Thu (Phương Anh Đào).",
    like: 79,
    comment: 29,
    link:
      "https://tix.vn/goc-dien-anh/7939-dien-vien-dac-biet-cua-bang-chung-vo-hinh",
  },
  {
    id: "13",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/06/ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo-15925398181587.png",
    tieuDe: "Bán Đảo Peninsula là bom tấn xác sống không thể bỏ lỡ!",
    noiDung:
      "Là phần phim khép lại bộ ba xác sống (Seoul Station, Train to Busan - 2016) của đạo diễn Yeon Sang Ho, mới đây, bom tấn Bán Đảo (Train to Busan 2/Peninsula) vừa chính thức tung trailer hé lộ những tình tiết mới cực hấp dẫn.",
    like: 75,
    comment: 42,
    link:
      "https://tix.vn/goc-dien-anh/7934-ban-dao-peninsula-la-bom-tan-xac-song-khong-the-bo-lo",
  },
  {
    id: "14",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/06/toi-se-lam-tat-ca-ngo-ngang-boi-phien-ban-ta-ac-cua-minh-song-ji-hyo-15925373032288.png",
    tieuDe:
      "‘Tôi sẽ làm tất cả ngỡ ngàng bởi phiên bản tà ác của mình’ - Song Ji Hyo",
    noiDung:
      "Nhân dịp tác phẩm “Kẻ Xâm Nhập” giữ vững ngôi vương phòng vé suốt gần một tuần trình chiếu tại quê nhà, ekip sản xuất liền cho đăng tải poster cùng trailer đặc biệt, đồng thời chia sẻ không ít thông tin lý thú xoay quanh nội dung bộ phim.",
    like: 3,
    comment: 67,
    link:
      "https://tix.vn/goc-dien-anh/7933-toi-se-lam-tat-ca-ngo-ngang-boi-phien-ban-ta-ac-cua-minh-song-ji-hyo",
  },
  {
    id: "15",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/05/batman-vs-joker-ai-tot-ai-xau-15888416485092.png",
    tieuDe: "Batman vs. Joker: Ai tốt ai xấu?",
    noiDung:
      "Người ta nói Batman có một giàn phản diện hay nhất trong giới truyện tranh cũng như điện ảnh, nhưng mình biết chắc chắn khi nghe câu đó người ta chỉ nghĩ đến một người, The Joker - Hoàng tử hề của giới tội phạm.",
    like: 25,
    comment: 20,
    link: "https://tix.vn/goc-dien-anh/7905-batman-vs-joker-ai-tot-ai-xau",
  },
  {
    id: "16",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/05/ba-dong-lin-shaye-cua-insidious-tai-xuat-trong-phim-kinh-di-bay-linh-hon-15891843391235.png",
    tieuDe:
      "‘Bà đồng’ Lin Shaye của Insidious tái xuất trong phim kinh dị ‘Bẫy Linh Hồn’",
    noiDung:
      "Nữ hoàng phim kinh dị Lin Shaye tiếp tục thể hiện khả năng diễn xuất thần với hình ảnh điên loạn trong “DreamKatcher” – phim kinh dị rùng rợn đánh dấu sự trở lại của các rạp chiếu phim sau thời gian giãn cách xã hội.",
    like: 1,
    comment: 25,
    link:
      "https://tix.vn/goc-dien-anh/7910-ba-dong-lin-shaye-cua-insidious-tai-xuat-trong-phim-kinh-di-bay-linh-hon",
  },
  {
    id: "17",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/05/diem-mat-nhung-phim-viet-cong-pha-phong-chieu-trong-nam-2020-15885654164749.jpg",
    tieuDe: "Điểm mặt những phim Việt công phá phòng chiếu trong năm 2020",
    noiDung:
      "Nửa cuối năm là thời gian thị trường phim Việt sẽ dậy sóng với sự trở lại của những tên tuổi gạo cội trong làng điện ảnh. Cùng điểm sơ qua những gưởng mặt sáng giá này nhé!",
    like: 87,
    comment: 85,
    link:
      "https://tix.vn/goc-dien-anh/7900-diem-mat-nhung-phim-viet-cong-pha-phong-chieu-trong-nam-2020",
  },
  {
    id: "18",
    hinhAnh:
      "https://s3img.vcdn.vn/123phim/2020/03/acd6fae7353783fb3a928ad01ba92e98.jpg",
    tieuDe:
      "Cigarettes After Sex chợt thoáng xuất hiện trong trailer phim tâm lý Promising Young Woman",
    noiDung: "Toxic của Britney Spears cũng vang lên luôn đấy.",
    like: 83,
    comment: 76,
    link:
      "https://tix.vn/goc-dien-anh/7889-cigarettes-after-sex-chot-thoang-xuat-hien-trong-trailer-phim-tam-ly-promising-young-woman",
  },
];

/** new
{
    "id": "18",
    "hinhAnh": "https://s3img.vcdn.vn/123phim/2020/03/837f23782617347393261b53bb9e43cc.jpg",
    "tieuDe": "Dàn diễn viên 'siêu hot' góp mặt trong Bloodshot gồm có những ai?",
    "noiDung": "Là tác phẩm mở màn cho Vũ trụ Điện ảnh Valiant, chắc hẳn những cái tên bảo chứng phòng vé cũng là lý do sẽ mang đến thành công cho Bloodshot.",
    "like": 83,
    "comment": 76,
    "link": "https://tix.vn/goc-dien-anh/7880-dan-dien-vien-sieu-hot-gop-mat-trong-bloodshot-gom-co-nhung-ai"
  }
 */

// [
//   {
//     "id": "1",
//     "createdAt": "2020-09-29T11:47:24.767Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jackiesaik/128.jpg",
//     "username": "Donnal Trump",
//     "point": 10,
//     "like": 21,
//     "isLiked": false,
//     "post": "Xem trailer hấp dẫn quá, cuối tuần này phải rủ Putin đi xem mới được",
//     "comment":0
//   },
//   {
//     "id": "2",
//     "createdAt": "2020-09-30T00:19:41.783Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andrewabogado/128.jpg",
//     "username": "Maria Ozaza",
//     "point": 3,
//     "like": 80,
//     "isLiked": false,
//     "post": "Xem phim ủng hộ em diễn viên xinh đẹp nào!",
//     "comment":0
//   },
//   {
//     "id": "3",
//     "createdAt": "2020-09-29T17:48:38.094Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/francis_vega/128.jpg",
//     "username": "Người Ảo Tưởng",
//     "point": 9,
//     "like": 31,
//     "isLiked": false,
//     "post": "Hì hì, hôm qua dắt crush đi coi xong thì hôm nay crush thành người yêu mình rồi <3",
//     "comment":0
//   },
//   {
//     "id": "4",
//     "createdAt": "2020-09-29T22:31:04.750Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg",
//     "username": "Chú bé bán diêm",
//     "point": 6,
//     "like": 53,
//     "isLiked": false,
//     "post": "Đi xem phim phải mặc đồ đẹp nữa thì mới đúng chuẩn. Ghé shop em đang giảm giá áo búp bê để đi xem phim với chàng nào",
//     "comment":0
//   },
//   {
//     "id": "5",
//     "createdAt": "2020-09-29T18:47:06.117Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/chris_witko/128.jpg",
//     "username": "G2 Esport",
//     "point": 6,
//     "like": 34,
//     "isLiked": false,
//     "post": "Phim này nhiều tình tiết tấu hài nếu áp dụng ngoài đời chắc sẽ gây ấn tượng mạnh lắm :))",
//     "comment":0
//   },
//   {
//     "id": "6",
//     "createdAt": "2020-09-29T22:54:47.187Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dotgridline/128.jpg",
//     "username": "Khuất Duy Quang",
//     "point": 6,
//     "like": 82,
//     "isLiked": false,
//     "post": "Ai khen hay chứ tui thấy kịch bản không hấp dẫn mình lắm :3",
//     "comment":0
//   },
//   {
//     "id": "7",
//     "createdAt": "2020-09-30T04:48:05.822Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/matkins/128.jpg",
//     "username": "Lương Tùng Sang",
//     "point": 9,
//     "like": 25,
//     "isLiked": false,
//     "post": "Xuất sắc, kịch tính và không kém phần hài hước, muốn đi xem lại lần 2",
//     "comment":0
//   },
//   {
//     "id": "8",
//     "createdAt": "2020-09-29T15:28:29.734Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/akmur/128.jpg",
//     "username": "Đinh Phúc Nguyên",
//     "point": 4,
//     "like": 42,
//     "isLiked": false,
//     "post": "Ai bảo phim hay, hôm qua dắt mấy đứa con đi xem tụi nó ngủ hết trong rạp >.<",
//     "comment":0
//   },
//   {
//     "id": "9",
//     "createdAt": "2020-09-30T00:02:50.466Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/naitanamoreno/128.jpg",
//     "username": "The Imposter",
//     "point": 7,
//     "like": 97,
//     "isLiked": false,
//     "post": "Phim khá hại não, xem xong 10p sau mới hiểu",
//     "comment":0
//   },
//   {
//     "id": "10",
//     "createdAt": "2020-09-30T00:07:15.820Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kosmar/128.jpg",
//     "username": "Hillary Clinton",
//     "point": 7,
//     "like": 9,
//     "isLiked": false,
//     "post": "Phim rất hay, rất đáng xem!",
//     "comment":0
//   },
//   {
//     "id": "11",
//     "createdAt": "2020-09-29T22:25:03.538Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dingyi/128.jpg",
//     "username": "Chú bé bán diêm",
//     "point": 6,
//     "like": 27,
//     "isLiked": false,
//     "post": "Lại là em đây, hôm nay là ngày cuối khuyến mãi rồi nha mọi người ơi, ghé ghé shop em nào",
//     "comment":0
//   },
//   {
//     "id": "12",
//     "createdAt": "2020-09-30T03:36:47.344Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/BroumiYoussef/128.jpg",
//     "username": "Putin",
//     "point": 7,
//     "like": 23,
//     "isLiked": false,
//     "post": "Ước gì có thời gian rảnh sẽ đi xem ngay và luôn",
//     "comment":0
//   },
//   {
//     "id": "13",
//     "createdAt": "2020-09-30T06:52:56.926Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jarjan/128.jpg",
//     "username": "Maddison76",
//     "point": 10,
//     "like": 80,
//     "isLiked": false,
//     "post": "Diễn viên cực phẩm",
//     "comment":0
//   },
//   {
//     "id": "14",
//     "createdAt": "2020-09-29T18:03:24.769Z",
//     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/aluisio_azevedo/128.jpg",
//     "username": "Joe Biden",
//     "point": 8,
//     "like": 47,
//     "isLiked": false,
//     "post": "Xem phim còn kịch tính hơn chạy đua vào nhà Trắng",
//     "comment":0
//   }
// ]
