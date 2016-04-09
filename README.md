<a href="http://www.spoj.com/CSMS/problems/MSR10_04/"> Үг </a>
<a href="http://www.spoj.com/CSMS/problems/TSEREG/"> Цэрэг </a>
<a href="https://uva.onlinejudge.org/external/108/p10870.pdf"> UVa 10870 : Recurrences </a>
<a href="https://uva.onlinejudge.org/external/115/p11551.pdf"> UVa 11551 : Experienced Endeavour </a>
<a href="http://www.spoj.com/CSMS/problems/NEIGH/"> Хөршүүд </a>

```C++
#include <vector>
#include <iostream>

int MOD = 1000000007;
using namespace std;
// Matrix class
class Matrix{
    public:
        int N; // Matrix size
        vector< vector< long long > > data; // matrix values
 
        Matrix(int N); // constructor resize N matrix
        Matrix(const Matrix &matrix); // constructor assign matrix values
 
        const Matrix &operator=(const Matrix &A); // assign operator
        const Matrix operator*(const Matrix &A); // product operator
        const Matrix operator^(int P ); // pow operator
 
        ~Matrix(); 
};

Matrix::Matrix(int N){
    this->N = N;
    data = vector< vector< long long > >(N, vector< long long >(N));
}

Matrix::Matrix(const Matrix &A){
    this->N = A.N;
    data = vector< vector< long long > >(A.data);
}
Matrix::~Matrix(){
    data.clear();
}

const Matrix &Matrix::operator=(const Matrix &A){
    if( &A != this ){
        data.clear();
        N = A.N;
        data = vector< vector< long long > >(A.data);
    }
    return *this;
}
const Matrix Matrix::operator*(const Matrix &A){
    Matrix C(A.N);
    for( int i = 0; i < A.N; ++i )
        for( int j = 0; j < A.N; ++j ){
            for( int k = 0; k < A.N; ++k )
                C.data[i][j] = (C.data[i][j] + data[i][k] * A.data[k][j])%MOD;
        }
    return C;
}

const Matrix Matrix::operator^(int P){
    if(P == 1) return (*this);
    if(P & 1) return ((*this) * ((*this) ^ (P-1)));
    Matrix B = ((*this) ^ (P/2));
    return (B*B);
}

long long value(Matrix &matrix,int P,vector< int > &def){
	if (P <= def.size())
		return def[P-1];
	Matrix res = matrix^(P-def.size());
	return ((res.data[0][0] * def[1])%MOD + (res.data[0][1] * def[0])%MOD)%MOD;
}

// main
int main(){
	
	vector< int > def = {4,14};
	
	Matrix matrix(2);
	matrix.data[0][0] = 3; matrix.data[0][1] = 2;
	matrix.data[1][0] = 1; matrix.data[1][1] = 0;
	
	int t;
	cin>>t;
	while (t--){
		int n;
		cin>>n;
		cout<<value(matrix,n,def)<<endl;
	}
	
	return 0;
}

```
