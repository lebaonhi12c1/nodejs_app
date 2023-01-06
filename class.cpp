#include <bits/stdc++.h>
using namespace std;
 
//Lớp Cha
class NhanVien {
	public:
        int id
	    string firstName;
	    string lastName;
	    int age;
        
        // Setter
        void setId(int s) {
            id = s;
        }
        // Getter
        int getId() {
            return id;
        }
        // Setter
        void setFirstName(string s) {
            firstName = s;
        }
        
        int getFirstName() {
        return firstName;
        }
         // Setter
        void setLastName(string s) {
            lastName = s;
        }
        
        int getLastName() {
        return lastName;
        }
        void setAge(int s) {
            age = s;
        }
        // Getter
        int getAge() {
            return age;
        }
	    Person(int _id,string _firstName, string _lastName, int _age)
	    {
	        id = _id;
            firstName = _firstName;
	        lastName = _lastName;
	        age = _age;
	    }

	    void themHangHoa(HangHoa hs) {}
	    void xoaHangHoa(int id) {}
	    void capNhatHangHoa(HangHoa hs) {}
	    void banHang() {}
};

class HangHoa {
	public:
        int id
	    string ten;
        float gia;
	

	    HangHoa(int _id, string _ten,float _gia)
	    {
	        id = _id;
	        ten = _ten;
            gia=_gia;
	    }
        void showAll() {}
        void showInfo(int id) {}
};
 
// Lớp con kế thừa từ lớp cha
class QuanLy : public NhanVien {
public:
    bool isQuanly;
    QuanLy(bool _isQl)
	{
	        isQuanly = _isQl;
	}
	void themNguoiSuDung() {}
	void xoaNguoiSuDung() {}
	void suaNguoiSuDung() {}
	void xemBaoCaoDoanhThu() {}  
};
 
int main() {
    return 0;
}