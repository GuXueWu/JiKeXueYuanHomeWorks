-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-02 03:17:44
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news_sql`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(400) NOT NULL,
  `newsimg` varchar(400) NOT NULL,
  `newstime` date NOT NULL,
  `newssrc` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(14, '精选', '人民代表习近平', 'http://timg01.baidu-img.cn/timg?tc&size=b436_273&sec=0&quality=75&cut_x=55&cut_y=0&cut_h=0&cut_w=436&di=fde8d12dfeec00e9407973c150574b2b&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fnews%2Fcrop%253D1%252C20%252C547%252C273%2Fsign%3Ddaf9f536bbb7d0a26f865eddf6de5a3b%2Fa8ec8a13632762d080ce3d3ba9ec08fa503dc646.jpg', '2017-03-02', '热点'),
(15, '精选', '13名全国政协委员提案：父母失责应负刑则', 'http://timg01.baidu-img.cn/timg?tc&size=b523_327&sec=0&quality=75&cut_x=65&cut_y=0&cut_h=0&cut_w=523&di=b6b5d1be7c09d4a95a4a7879a575c75e&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fnews%2Fcrop%253D4%252C4%252C654%252C327%2Fsign%3Df206c8936bd0f703f2fdcf9c35ce7d09%2Fa8ec8a13632762d08f163a3ba9ec08fa513dc60e.jpg', '2017-03-04', '网易头条'),
(16, '精选', '特普朗国会演讲', 'http://timg01.baidu-img.cn/timg?tc&size=b523_327&sec=0&quality=75&cut_x=65&cut_y=0&cut_h=0&cut_w=523&di=b6b5d1be7c09d4a95a4a7879a575c75e&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fnews%2Fcrop%253D4%252C4%252C654%252C327%2Fsign%3Df206c8936bd0f703f2fdcf9c35ce7d09%2Fa8ec8a13632762d08f163a3ba9ec08fa513dc60e.jpg', '2017-03-03', '凤凰头条'),
(17, '精选', '股神巴菲特', 'http://t10.baidu.com/it/u=3712773693,35173673&fm=170&s=07F6E83211524DCA1E7828DE000090B2&w=218&h=146&img.JPEG', '2017-03-11', '猜你喜欢'),
(18, '百家', '顺丰正式登陆资本市场', 'http://t11.baidu.com/it/u=3654006091,2174936404&fm=170&s=F689D803DEF93D905E99110E0100A093&w=218&h=146&img.JPEG', '2017-03-11', '百度'),
(19, '百家', '蒙牛"未来星" 被判侵权伊利"QQ星"判赔215万', 'http://f12.baidu.com/it/u=1559490935,1109840867&fm=170&s=3DF73E9E4D5056CA4E6ED47F03001078&w=608&h=434&img.JPEG&access=215967316', '2017-03-11', '金融杂谈'),
(20, '本地', '濮存昕卸任北京人艺副院长 如愿以偿？', 'http://t10.baidu.com/it/u=3663814218,2484385173&fm=170&s=9A8A1B6D4643635F908C58A30300E040&w=377&h=374&img.JPEG&access=215967317', '2017-03-11', '热点'),
(21, '本地', '北京昌平科技园与万科战略合作签约仪式在京举行', 'http://t10.baidu.com/it/u=1513722345,2673416432&fm=170&s=578608E6CE1138C4672A98B30300D001&w=600&h=394&img.JPEG&access=215967317', '2017-03-11', '中国经济网'),
(22, '娱乐', '铁三角再聚首！张国立曝《纪晓岚5》将开拍', 'http://t10.baidu.com/it/u=2625358686,3054828829&fm=170&s=872AFB070A7342962C01E8B203007042&w=333&h=500&img.JPEG&access=215967317', '2017-03-11', '娱乐'),
(23, '娱乐', '《三生三世》大结局 赵又廷杨幂桃花林拥吻', 'http://t12.baidu.com/it/u=3605507177,4238513599&fm=170&s=D7A4B8457741334D4515048D030010C1&w=481&h=372&img.JPEG&access=215967317', '2017-03-11', '三生三世'),
(24, '社会', '大叔装"高富帅"骗十余女大学生财色 服刑期间又有人报案', 'http://t11.baidu.com/it/u=2686326340,1473503233&fm=170&s=825179846771258C7AC960320300F042&w=500&h=333&img.JPEG&access=215967317', '2017-03-03', '宁波网'),
(25, '社会', '挪威未成年少年从六、七岁起虐杀动物长达十年判刑两年', 'http://f10.baidu.com/it/u=4157144739,2453581373&fm=170&s=DCA8E75ACC614E17E3BCE25A030040D7&w=640&h=436&img.JPEG&access=215967316', '2017-03-03', '百家号'),
(26, '军事', '罗援献反制萨德十策：必要时可定点清除萨德阵地', 'http://t12.baidu.com/it/u=75802367,2394026594&fm=170&s=6BB207C1965115D60BB0A8A203006093&w=349&h=251&img.JPEG&access=215967317', '2017-03-03', '凤凰新闻'),
(27, '军事', '中国这么多老轰六为何不服役，两款新杀手导弹提醒本相', 'http://f10.baidu.com/it/u=1928740545,2206457574&fm=170&s=5C8EA35554CB05604C9A0C150300D0EA&w=640&h=390&img.JPEG&access=215967316', '2017-03-03', '百家号'),
(28, '女人', '眼部美学和修饰意义', 'http://f11.baidu.com/it/u=1932969208,3339940700&fm=170&s=BDB4CB15429042695510E4DE030080B3&w=640&h=360&img.JPEG&access=215967316', '2017-03-11', '百家号'),
(29, '女人', '遇到花心男人？这样对他，他就离不开你了', 'http://f10.baidu.com/it/u=922608237,3226449746&fm=170&s=59899355440A61530E35D9F60300E091&w=640&h=426&img.JPEG&access=215967316', '2017-03-11', '百家号'),
(30, '搞笑', '脑洞大开 设计出来的可以擦除任何错误的橡皮', 'http://f12.baidu.com/it/u=3062649614,1075752058&fm=170&s=1589BD55B7226B1D63B974EA03008030&w=640&h=426&img.JPEG&access=215967316', '2017-03-02', '百家号'),
(31, '搞笑', '辣眼睛段子集合，看完不要来打我', 'http://f10.baidu.com/it/u=328190403,119980814&fm=170&s=C210578C48336E924CE548E503003032&w=600&h=510&img.JPEG&access=215967316', '2017-03-02', '百家号'),
(32, '互联网', '网购七日退货“不需理由” 新规15日起正式施行-新华网', 'http://t10.baidu.com/it/u=2712389058,3293943104&fm=170&s=DBC3038C0CF07A842A4201590300C0BA&w=640&h=361&img.JPEG&access=215967317', '2017-03-02', '新华网'),
(33, '互联网', '让Uber跌落神坛的罪魁祸首竟是其不堪的企业文化', 'http://t12.baidu.com/it/u=2691832928,2551204763&fm=170&s=4D55A9443BABBB785AF18D110300C0C3&w=550&h=330&img.JPEG&access=215967317', '2017-03-02', '新浪首页'),
(34, '科技', '台积电10纳米良率低 联发科X30无奈推迟进攻高端市场', 'http://t11.baidu.com/it/u=1337805655,4062486004&fm=170&s=4151126603E4974D18C9E5020000E0C3&w=640&h=455&img.JPG&access=215967317', '2017-03-02', '威锋网'),
(35, '科技', '三星神坑PC队友：内存条疯狂蓝屏 紧急召回', 'http://t10.baidu.com/it/u=2546210628,2702529470&fm=170&s=43A03962D6C29AA5662471230300E0E1&w=600&h=398&img.JPEG&access=215967317', '2017-03-02', '快科技');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
