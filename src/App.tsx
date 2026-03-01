import { motion } from "motion/react";
import { 
  BookOpen, 
  Gamepad2, 
  Mic2, 
  Star, 
  Menu, 
  X, 
  ChevronRight,
  Globe,
  Users,
  PlayCircle
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Trang chủ", href: "#" },
    { name: "Khóa học", href: "#" },
    { name: "Trò chơi", href: "#" },
    { name: "Lớp học", href: "#" },
    { name: "Về chúng tôi", href: "#" },
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-yellow-200">
      {/* Navigation */}
      <nav className="fixed top-5 left-0 right-0 z-50 px-4 md:px-10">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-full h-20 flex items-center justify-between px-6 md:px-10 shadow-sm border border-black/5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FFD347] rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-2xl font-black text-[#202630]">学</span>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-[#0D1216]">
              Tiếng Trung Trẻ Em
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href} 
                  className="text-sm font-bold text-[#0D1216]/60 hover:text-[#0D1216] transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="h-6 w-px bg-black/10"></li>
            <li>
              <button className="flex items-center gap-2 text-sm font-bold text-[#0D1216]/60 hover:text-[#0D1216] transition-colors">
                <Globe className="w-4 h-4" />
                Tiếng Việt
              </button>
            </li>
            <li>
              <button className="bg-[#FFD347] px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_2px_0_0_#DCB500] active:translate-y-0.5 transition-all">
                Bắt đầu ngay
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-24 left-4 right-4 bg-white rounded-3xl p-6 shadow-xl border border-black/5"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-lg font-bold block py-2">{item.name}</a>
                </li>
              ))}
              <button className="w-full bg-[#FFD347] py-4 rounded-2xl text-lg font-bold shadow-[0_4px_0_0_#DCB500]">
                Bắt đầu ngay
              </button>
            </ul>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 mb-6">
              <Star className="w-4 h-4 text-[#FFD347] fill-[#FFD347]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#0D1216]/50">Học mà chơi, chơi mà học</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-[#0D1216] mb-6">
              Vừa học vừa chơi cùng <br />
              <span className="text-[#8C71F6]">Tiếng Trung Trẻ Em</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-[#0D1216]/60 mb-10 max-w-xl mx-auto lg:mx-0">
              Mọi trẻ em đều xứng đáng được tiếp cận giáo dục chất lượng. Sứ mệnh của chúng tôi là làm cho việc học trở nên thú vị, hấp dẫn và hoàn toàn miễn phí.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-[#FFD347] px-8 py-4 rounded-2xl text-lg font-black shadow-[0_4px_0_0_#DCB500] hover:scale-105 active:scale-95 transition-all">
                Tải ứng dụng ngay
              </button>
              <button className="bg-white px-8 py-4 rounded-2xl text-lg font-black border-2 border-black/5 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
                <PlayCircle className="w-6 h-6" />
                Xem giới thiệu
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 bg-white p-4 rounded-[40px] shadow-2xl border-8 border-white"
            >
              <img 
                src="https://picsum.photos/seed/kids-learning/800/600" 
                alt="Kids learning" 
                className="rounded-[32px] w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD347] rounded-full flex items-center justify-center -z-10 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8C71F6] rounded-3xl -z-10 rotate-12"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 md:px-10 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#DCD5FF] p-10 rounded-[40px] relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-[#0D1216] mb-4">Học qua trò chơi</h3>
                <p className="text-lg font-medium text-[#0D1216]/60 mb-8 max-w-md">
                  Trẻ em học tiếng Trung thông qua các trò chơi vui nhộn, bài học hoạt hình và ví dụ thực tế.
                </p>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Gamepad2 className="w-8 h-8 text-[#8C71F6]" />
                  </div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Mic2 className="w-8 h-8 text-[#8C71F6]" />
                  </div>
                </div>
              </div>
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Star className="w-32 h-32 fill-current" />
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#FFD9C0] p-10 rounded-[40px] relative overflow-hidden group cursor-pointer"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-[#0D1216] mb-4">Lộ trình bài bản</h3>
                <p className="text-lg font-medium text-[#0D1216]/60 mb-8 max-w-md">
                  Chương trình được thiết kế bởi các chuyên gia ngôn ngữ, phù hợp với từng độ tuổi và trình độ.
                </p>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <BookOpen className="w-8 h-8 text-[#FF8F50]" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10 group-hover:opacity-20 transition-opacity">
                <BookOpen className="w-48 h-48 fill-current" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-black text-[#0D1216]">Khóa học nổi bật</h2>
            <button className="text-[#8C71F6] font-bold flex items-center gap-1 hover:underline">
              Xem tất cả <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Nhập môn Tiếng Trung", level: "Cơ bản", color: "#D3E7FD", icon: <Globe className="text-blue-500" /> },
              { title: "Giao tiếp hàng ngày", level: "Trung cấp", color: "#FFCEE1", icon: <Users className="text-pink-500" /> },
              { title: "Vui học Hán tự", level: "Mọi trình độ", color: "#FFE8BA", icon: <Star className="text-orange-500" /> },
              { title: "Kể chuyện bé nghe", level: "Nâng cao", color: "#B7E8CD", icon: <BookOpen className="text-green-500" /> },
            ].map((course, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                className="rounded-[32px] p-6 flex flex-col h-80 relative group cursor-pointer overflow-hidden"
                style={{ backgroundColor: course.color }}
              >
                <div className="bg-white/50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  {course.icon}
                </div>
                <h4 className="text-xl font-black text-[#0D1216] mb-2">{course.title}</h4>
                <span className="text-sm font-bold text-[#0D1216]/40">{course.level}</span>
                
                <div className="mt-auto">
                  <div className="w-full h-2 bg-black/5 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-white/80"></div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center pointer-events-none group-hover:pointer-events-auto"
                >
                  <button className="bg-white px-6 py-3 rounded-full font-black shadow-xl flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform">
                    Học ngay <PlayCircle className="w-5 h-5" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto bg-[#0DB564] rounded-[60px] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          <div className="flex-1 relative z-10">
            <div className="bg-[#FFD100] inline-block px-6 py-2 rounded-full text-sm font-black mb-8 shadow-[0_2px_0_0_#DCB500]">
              CHÚNG TÔI LÀ AI?
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Cam kết giáo dục miễn phí cho mọi trẻ em
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Kể từ khi thành lập, Tiếng Trung Trẻ Em chưa bao giờ hoạt động vì lợi nhuận — trọng tâm của chúng tôi luôn là cung cấp cho mọi trẻ em cơ hội tiếp cận giáo dục chất lượng cao. Chúng tôi tin rằng mọi trẻ em đều xứng đáng có cơ hội học tập, phát triển và phát huy hết tiềm năng của mình.
            </p>
            <button className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
              Tìm hiểu thêm <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 relative z-10 w-full max-w-md">
            <div className="bg-white p-8 rounded-[40px] shadow-xl relative">
              <p className="text-lg font-bold italic text-[#0D1216] mb-6">
                "Xây dựng một nền tảng giáo dục chất lượng cao, hấp dẫn và thực sự miễn phí cho tất cả mọi người là sứ mệnh ý nghĩa nhất trong chương tiếp theo của tôi."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/seed/founder/100/100" alt="Founder" />
                </div>
                <div>
                  <div className="font-black text-[#0D1216]">Nguyễn Văn A</div>
                  <div className="text-sm font-bold text-[#0DB564]">Người sáng lập</div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-10 w-8 h-8 bg-white rotate-45"></div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-10 bg-[#F5F2FF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-[#0D1216] text-center mb-16">Phụ huynh nói gì về chúng tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Con tôi rất thích các trò chơi trên ứng dụng. Bé đã có thể tự tin chào hỏi bằng tiếng Trung chỉ sau 1 tuần!", author: "Mẹ bé Gia Bảo (5 tuổi)", color: "#FFCEE1" },
              { text: "Giao diện rất dễ thương và dễ sử dụng. Tôi không cần phải ngồi kèm con học vì bé tự khám phá rất say mê.", author: "Bố bé Minh Anh (7 tuổi)", color: "#FFD9C0" },
              { text: "Lộ trình học rất rõ ràng. Các bài hát và câu chuyện giúp bé nhớ từ vựng rất nhanh và lâu.", author: "Mẹ bé Linh Đan (6 tuổi)", color: "#CBD1FF" },
            ].map((feedback, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[40px] flex flex-col h-full"
                style={{ backgroundColor: feedback.color }}
              >
                <div className="mb-6 text-black/20">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M10 20H5V15H10V20ZM20 20H15V15H20V20Z" />
                  </svg>
                </div>
                <p className="text-lg font-bold text-[#0D1216] mb-8 flex-grow">"{feedback.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/50 rounded-full"></div>
                  <span className="font-black text-sm text-[#0D1216]/60">{feedback.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-20 px-4 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black text-[#3478F6] mb-6">
              Theo dõi hành trình học tập của bé!
            </h2>
            <p className="text-lg font-medium text-[#0D1216]/60 mb-10 max-w-lg">
              Theo dõi Tiếng Trung Trẻ Em trên mạng xã hội để nhận được những ý tưởng học tập thú vị, mẹo nuôi dạy con và những cập nhật mới nhất.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Youtube', 'Instagram', 'TikTok'].map(platform => (
                <button key={platform} className="w-12 h-12 bg-[#FFE8BA] hover:bg-[#FFD68A] rounded-full flex items-center justify-center transition-colors">
                  <span className="sr-only">{platform}</span>
                  <div className="w-6 h-6 bg-black/10 rounded-sm"></div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="https://picsum.photos/seed/mascot/500/500" 
              alt="Mascot" 
              className="w-full max-w-md mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-black text-[#4785FF] mb-2">Giáo dục chất lượng cao</h2>
              <h3 className="text-4xl font-black text-[#0D1216]">cho mọi trẻ em, miễn phí.</h3>
            </div>
            <div className="flex gap-6">
              <div className="bg-white rounded-3xl p-6 flex items-center gap-4 border border-black/5 shadow-sm min-w-[200px]">
                <div className="w-16 h-16 bg-[#7D52F4] rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-black text-[#0D1216]">164+</div>
                  <div className="text-sm font-bold text-[#999999]">Quốc gia</div>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 flex items-center gap-4 border border-black/5 shadow-sm min-w-[200px]">
                <div className="w-16 h-16 bg-[#0DB564] rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-black text-[#0D1216]">174k+</div>
                  <div className="text-sm font-bold text-[#999999]">Học viên</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 md:px-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#FFD347] rounded-lg flex items-center justify-center">
                <span className="text-lg font-black text-[#202630]">学</span>
              </div>
              <span className="text-xl font-black text-[#0D1216]">Tiếng Trung Trẻ Em</span>
            </div>
            <div className="flex items-center gap-8 text-sm font-bold text-[#0D1216]/40">
              <a href="#" className="hover:text-[#0D1216]">Chính sách bảo mật</a>
              <a href="#" className="hover:text-[#0D1216]">Điều khoản dịch vụ</a>
              <span>© 2024 - Tiếng Trung Trẻ Em</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="agent_7901kjmj63dpen9t2nre41dsgexn"></elevenlabs-convai>
    </div>
  );
}
