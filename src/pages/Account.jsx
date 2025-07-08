import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const API_URL = 'https://mindx-mockup-server.vercel.app/api/resources/Melodies%20Web%20Accounts';
const API_KEY = '6852b3cd6df26a3a2bf435cd';

const Account = () => {
  const [user, setUser] = useState({
    _id: '',
    name: '',
    email: '',
    phone: '',
    about: '',
    genre: '',
    password: '' // Cần lưu lại password để gửi lên khi cập nhật
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`${API_URL}?apiKey=${API_KEY}`);
      if (!response.ok) throw new Error('Không thể tải dữ liệu người dùng');
  
      const data = await response.json();
      const users = data.data?.data;
  
      if (!Array.isArray(users)) {
        throw new Error('Dữ liệu người dùng không hợp lệ');
      }
  
      const foundUser = users.find(u => u._id === userId);
  
      if (!foundUser) {
        throw new Error('Không tìm thấy người dùng');
      }
  
      setUser(foundUser);
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu người dùng:', error);
      setMessage({ 
        text: 'Không thể tải thông tin tài khoản', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/login', { state: { from: '/account' } });
    } else {
      fetchUserData(currentUser._id);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage({ text: '', type: '' });

    try {
      // Lấy tất cả người dùng để tìm người dùng hiện tại
      const response = await fetch(`${API_URL}?apiKey=${API_KEY}`);
      if (!response.ok) throw new Error('Không thể tải dữ liệu người dùng');
      
      const usersData = await response.json();
      const users = usersData.data.data;
      const currentUser = users.find(u => u._id === user._id);

      if (!currentUser) {
        throw new Error('Không tìm thấy tài khoản');
      }

      // Cập nhật thông tin người dùng
      const updatedUser = {
        ...currentUser,
        name: user.name,
        phone: user.phone,
        about: user.about,
        genre: user.genre
      };

      // Gửi yêu cầu cập nhật
      const updateResponse = await fetch(`${API_URL}/${user._id}?apiKey=${API_KEY}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser)
      });

      if (!updateResponse.ok) {
        throw new Error('Cập nhật thất bại');
      }

      // Cập nhật thông tin trong localStorage
      const updatedUserData = await updateResponse.json();
      localStorage.setItem('currentUser', JSON.stringify(updatedUserData.data));
      
      setMessage({ 
        text: 'Cập nhật thông tin thành công!', 
        type: 'success' 
      });
      
      setIsEditing(false);
    } catch (error) {
      console.error('Lỗi khi cập nhật thông tin:', error);
      setMessage({ 
        text: error.message || 'Có lỗi xảy ra khi cập nhật thông tin', 
        type: 'error' 
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#22172b] to-[#3d2a3f]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  // Phần JSX giữ nguyên như trước
  return (
    <div className="bg-gradient-to-b from-[#22172b] to-[#3d2a3f] min-h-screen text-white font-sans flex">
      <Sidebar />
      <main className="flex-1 px-8 py-6" style={{ marginLeft: '16rem' }}>
        <Header user={user} />
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Tài khoản của bạn</h1>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg transition-colors"
              >
                Chỉnh sửa thông tin
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setIsEditing(false);
                    // Reset form khi hủy
                    fetchUserData(user._id);
                  }}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSaving}
                  className="px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSaving ? 'Đang lưu...' : 'Lưu thay đổi'}
                </button>
              </div>
            )}
          </div>

          {message.text && (
            <div 
              className={`mb-6 p-4 rounded-lg ${
                message.type === 'error' ? 'bg-red-500/20 border border-red-500' : 'bg-green-500/20 border border-green-500'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-[#2d2240] rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-4xl font-bold">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="bg-transparent border-b border-white/30 focus:border-pink-500 focus:outline-none"
                        required
                      />
                    ) : (
                      user.name
                    )}
                  </h2>
                  <p className="text-gray-300">{user.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Số điện thoại</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#3d2e4a] text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    ) : (
                      <p>{user.phone || 'Chưa cập nhật'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Giới thiệu</label>
                    {isEditing ? (
                      <textarea
                        name="about"
                        rows="3"
                        value={user.about}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#3d2e4a] text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    ) : (
                      <p className="whitespace-pre-line">{user.about || 'Chưa có giới thiệu'}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Thể loại yêu thích</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="genre"
                        value={user.genre}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-[#3d2e4a] text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Ví dụ: Pop, Rock, EDM..."
                      />
                    ) : (
                      <p>{user.genre || 'Chưa cập nhật'}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Account;