// binary search

// #include<iostream>
// using namespace std;
// void binarySearch(int n,int a[],int k){
//     int s=0,mid;//start index
//     int e=n-1;//end
//     while(s<=e){
//     mid=s+(e-s)/2;
//     if(a[mid]==k){
//         cout<<mid;
//     return ;}
//     else if(a[mid]>k)
//     e=mid-1;
//     else
//     s=mid+1;
//     }
//     cout<<"NO OCCURRENCES";
// }
// int main(){
//     int n,k;
//     cin>>n;
//     int a[n];
//     for(int i=0;i<n;i++){
//     cin>>a[i];
//     }
//     cin>>k;
//     binarySearch(n,a,k);
//     }

//  linear search

// #include<iostream>
// using namespace std;
// bool linearSearch(int n,int a[],int k){
//     for(int i=0;i<n;i++)
//     if(a[i]==k)return true;
//     return false;
//     }
// int main(){
//     int n;cin>>n;
//     int a[n],k;
//     for(int i=0;i<n;i++)
//      cin>>a[i];
//     cin>>k;
//     bool ans=linearSearch(n,a,k);
//     if(ans) cout<<"Yes";
//     else cout<<"No";
// }

// bubble 

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cin>>n;
//     int a[n];
//     for(int i=0;i<n;i++) cin>>a[i];
//     for(int i=0;i<n;i++){
//         for(int j=0;j<n;j++){
//             if(a[j]>a[i]){
//                 swap(a[i],a[j]);
//             }
//         }
//         }
//         for(int i=0;i<n;i++){
//             cout<<a[i]<<" ";
//         }
    
// }


// insertion

// #include <iostream>
// using namespace std;
// int main() {
//   int n;cin>>n;int a[n];for(int i=0;i<n;i++)cin>>a[i];
//   for (int i = 1;i< n;i++) {
//       int key=a[i];
//     int j = i - 1;
//     while (key < a[j] && j >= 0) {
//       a[j + 1] = a[j];
//       j--;
//     }
//     a[j + 1] = key;
//   }
// for (int i = 0; i < n; i++)
//     cout << a[i] << " ";
// }


// selection

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cin>>n;
//     int day[n],month[n],year[n];
//     for(int i=0;i<n;i++){
//         cin>>day[i]>>month[i]>>year[i];
//     }
//     for(int i=0;i<n;i++){
//         for(int j=0;j<n;j++){
//             if(year[j]>year[i]){
//                 swap(year[i],year[j]);
//                 swap(month[i],month[j]);
//                 swap(day[i],day[j]);
//             }
//         }
//     }
//     for(int i=0;i<n;i++){
//         cout<<day[i]<<" "<<month[i]<<" "<<year[i]<<endl;
//     }
// }


// heap

// #include <iostream>
// #include <vector>
// using namespace std;
// void min_heapify(vector<int>& arr, int n, int i) {
//     int smallest = i;
//     int left_child = 2 * i + 1;
//     int right_child = 2 * i + 2;
//     if (left_child < n && arr[left_child] < arr[smallest]) {
//         smallest = left_child;
//     }
//     if (right_child < n && arr[right_child] < arr[smallest]) {
//         smallest = right_child;
//     }
//     if (smallest != i) {
//         swap(arr[i], arr[smallest]);
//         min_heapify(arr, n, smallest);
//     }
// }
// void build_min_heap(vector<int>& arr) {
//     int n = arr.size();
//     for (int i = n / 2 - 1; i >= 0; i--) {
//         min_heapify(arr, n, i);
//     }
// }
// void convert_to_min_heap(vector<int>& arr) {
//     build_min_heap(arr);
// }
// int main() {
//     int n;
//     cin >> n;
//     vector<int> arr(n);
//     for (int i = 0; i < n; i++) {
//         cin >> arr[i];
//     }
//     cout << "Original Array: ";
//     for (int i = 0; i < n; i++) {
//         cout << arr[i] << " ";
//     }
//     cout << endl;
//     convert_to_min_heap(arr);
//     cout << "Min Heap: ";
//     for (int i = 0; i < n; i++) {
//         cout << arr[i] << " ";
//     }
//     cout << endl;
//     return 0;
// }



// ouick

// #include<iostream>
// using namespace std;
// int partion(int*arr,int s,int e){
//     int pivot=arr[s];
//     int count=0;
//     for(int i=s+1;i<=e;i++){
//         if(arr[i]<=pivot){
//             count++;
//         }
//     }
//  int pvtidx=s+count;
//  swap(arr[pvtidx],arr[s]);
//  int i=s;
//  int j=e;
//  while(i<pvtidx&&j>pvtidx){
//      while(arr[i]<=arr[pvtidx]){
//          i++;
//      }
//      while(arr[j]>arr[pvtidx]){
//          j--;
//      }
//      if(i<pvtidx&&j>pvtidx){
//          swap(arr[i],arr[j]);
//          i++;
//          j--;
//      }
//  }
//  return pvtidx;
// }
// void quicksort(int *arr,int s,int e){
//     if(s>=e) return;
//     int pi=partion(arr,s,e);
//     quicksort(arr,s,pi-1);
//     quicksort(arr,pi+1,e);
// }
// int main(){
//     int n;
//     cin>>n;
//     int arr[n];
//     for(int i=0;i<n;i++)
//     cin>>arr[i];
//     quicksort(arr,0,n-1);
//     for(int i=0;i<n;i++) cout<<arr[i]<<" ";

// }


// merge

// using namespace std;
// int main() {
//     int size1, size2;
//     cin >> size1;
//     int arr1[size1];
//     for (int i = 0; i < size1; i++) {
//         cin >> arr1[i];
//     }
//     cin >> size2;
//     int arr2[size2];
//     for (int i = 0; i < size2; i++) {
//         cin >> arr2[i];
//     }
//     int mergedSize = size1 + size2;
//     int mergedArray[mergedSize];
//     int i = 0, j = 0, k = 0;
//     while (i < size1 && j < size2) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray[k++] = arr1[i++];
//         } else {
//             mergedArray[k++] = arr2[j++];
//         }
//     }
//     while (i < size1) {
//         mergedArray[k++] = arr1[i++];
//     }
//     while (j < size2) {
//         mergedArray[k++] = arr2[j++];
//     }
//     for (int i = 0; i < mergedSize; i++) {
//         cout << mergedArray[i] << " ";
//     }
//     return 0;
// }

// activity

// #include<iostream>
// #include<algorithm>
// using namespace std;
// struct Match{
//     string name;
//     int f;
//     int s;
// };
// bool compareMatches(const Match& a,const Match&b)
// {
//     return a.f<b.f;
// }
// int main()
// {
//     int n;
//     cin>>n;
//     struct Match m[50];
//     for(int i=0;i<n;i++)
//     {
//         cin>>m[i].name>>m[i].s>>m[i].f;
//     }
//     sort(m,m+n,compareMatches);
//     cout<<"Selected Activities are: "<<endl;
//     int i=0;
//     cout<<m[i].name<<" ";
//     for(int j=1;j<n;j++)
//     {
//         if(m[j].s>=m[i].f)
//         {
//             cout<<m[j].name;
//             i=j;
//         }
//     }
// }



// knapsack

// #include<iostream>
// #include<algorithm>
// #include<iomanip>
// using namespace std;
// struct profit{
//     int w;
//     int v;
// };
// bool check(const profit& a,const profit &b){
//     return (double) a.v/a.w>(double) b.v/b.w;
// }
// double knapstack(profit p[],int n,int c)
// {
//     sort(p,p+n,check);
    
//     int currW=0;
//     double totalV=0.0;
    
//     for(int i=0;i<n;i++){
//         if(currW+p[i].w<=c){
//             currW+=p[i].w;
//             totalV+=p[i].v;
//         }
//         else{
//             int reminder=c - currW;
//             totalV+=(double)p[i].v/p[i].w*reminder;
//             break;
//         }
//     }
//     return totalV;
// }
// int main()
// {
//     int n;
//     cin>>n;
//     struct profit p[50];
//     for(int i=0;i<n;i++){
//         cin>>p[i].w>>p[i].v;
        
//     }
//     cout<<"Maximum profit is:- ";
//     int capacity;  cin>>capacity;
//     cout<<fixed<<setprecision(2)<<knapstack(p,n,capacity);
// }


// naive

// #include<iostream>
// using namespace std;
// void find(string text,string pattern)
// {
//     int n=text.length();
//     int m=pattern.length();
//     bool found=false;
//     int i,j;
//     for(i=0;i<n;)
//     {
//         for(j=0;j<m;)
//         {
//             if(text[i]==pattern[j])
//             {
//                 i++;
//                 j++;
//             }
//             else
//             {
//                 i++;
//                 break;
//             }
//         }
//         if(j==m){
//             cout<<"Found at "<<i-j<<endl;
//             found=true;
//         }
//     }
//         if(!found)
//         cout<<"Not Found"<<endl;
// }
// int main()
// {
//     string s;
//     cin>>s;
//     string h;
//     cin>>h;
//     find(s,h);
// }


// kmp

// #include<iostream>
// using namespace std;
// void computelpsarray(string pat,int m,int lps[]){
//     int len=0;
//     lps[0]=0;
//     int i=1;
//     while(i<m){
//         if(pat[0]==pat[len]){
//             len++;
//             lps[i]=len;
//             i++;
//         }
//         else{
//             if(len!=0){
//                 len=lps[len-1];
//             }
//             else{
//                 lps[i]=0;
//                 i++;
//             }
//         }
//     }
// }
// void kmp(string txt,string pat){
//     int n=txt.length(),m=pat.length();
//     int lps[m]={0};
//     computelpsarray(pat,m,lps);
//     int i=0,j=0,f=0;
//     while(i<n){
//         if(pat[j]==txt[i]){
//             j++;
//             i++;
//         }
//         if(j==m){
//             cout<<"Found at "<<i-j<<endl;
//             j=lps[j-1];
//             f=1;
//         }
//         else if(i<n && pat[j]!=txt[i]){
//             if(j!=0)
//             j=lps[j-1];
//             else
//             i=i+1;
//         }
//     }
//     if(f==0)
//     cout<<"Not Found";
// }
// int main(){
//     string txt,pat;
//     cin>>txt>>pat;
//     kmp(txt,pat);
// }



//  subset sum problem

// #include<iostream>
// using namespace std;
// int count(int a[],int n,int sum,int current){
//     if(sum==0){
//         return 1;
//     }
//     if(current>=n||sum<0){
//         return 0;
//     }
//     int in=count(a,n,sum-a[current],current+1);
//     int ex=count(a,n,sum,current+1);
//     return in+ex;
    
// }
// int main(){
//     int n,target;
//     cin>>n;
//     int a[n];
//     for(int i=0;i<n;i++){
//         cin>>a[i];
//     }
//     cin>>target;
//     int total=count(a,n,target,0);
//     cout<<total<<endl;
// }





// rat

// #include<iostream>
// using namespace std;
// bool issafe(int** arr, int x, int y, int n){
//     if(x<n && y<n && arr[x][y]==1){
//         return true;
//     }
//     return false;
// }
// bool ratinMaze(int** arr, int x, int y, int n, int** solArr){
//     if(x==n-1 && y==n-1){
//         solArr[x][y]=1;
//         return true;
//     }
//     if(issafe(arr, x, y, n)){
//         solArr[x][y]=1;
//         if(ratinMaze(arr, x+1, y, n, solArr)){
//             return true;
//         }
//         if(ratinMaze(arr, x, y+1, n, solArr)){
//             return true;
//         }
//         solArr[x][y]=0;
//         return false;
//     }
//     return false;
// }
// int main(){
//     int n;
//     cin>>n;
//     int** arr=new int*[n];
//     for(int i=0; i<n; i++){
//         arr[i]=new int[n];
//     }
//     for(int i=0; i<n; i++){
//         for(int j=0; j<n; j++){
//             cin>>arr[i][j];
//         }
//     }
//     int** solArr=new int*[n];
//     for(int i=0; i<n; i++){
//         solArr[i] = new int[n];
//         for(int j=0; j<n; j++){
//             solArr[i][j]=0;
//         }
//     }
//     if(ratinMaze(arr, 0, 0, n, solArr)){
//         for(int i=0; i<n; i++){
//         for(int j=0; j<n; j++){
//             cout<<solArr[i][j]<<" ";
//         }
//         cout<<endl;
//         }
//     }
//     else{
//         cout<<"Solution doesn't exist";
//     }
//     return 0;
// }




//       LCS

// #include<iostream>
// #include<cstring>
// using namespace std;
// int find(string s1,string s2){
//     int l1=s1.length();
//     int l2=s2.length();
//     int dp[l1+1][l2+1];
//     for(int i=0;i<=l1;i++){
//     for(int j=0;j<=l2;j++){
//         if(i==0||j==0)
//         dp[i][j]=0;
//         else if(s1[i-1]==s2[j-1])
//         dp[i][j]=dp[i-1][j-1]+1;
//         else          
//   dp[i][j]=max(dp[i-1][j],dp[i][j-1]); 
//         }
//     }
//     return dp[l1][l2];
// }
// int main(){
//     string s1,s2;
//     cin>>s1>>s2;
//     int lcslength=find(s1,s2);
//     cout<<lcslength<<endl;
//     return 0;
// }


// levenshtein distance

// #include<iostream>
// #include<cstring>
// using namespace std;
// int minimum(int a,int b,int c){
//     return min(min(a,b),c);
// }
// int distance(string str1,string str2){
//     int m=str1.length();
//     int n=str2.length();
//     int dp[m+1][n+1];
//     for(int i=0;i<=m;i++){
//         for(int j=0;j<=n;j++){
//             if(i==0){
//                 dp[i][j]=j;
//             }
//             else if(j==0){
//                 dp[i][j]=i;
//             }
//             else if(str1[i-1]==str2[j-1]){
//                 dp[i][j]=dp[i-1][j-1];
//             }
//             else{
//                 dp[i][j]=1+minimum(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
//             }
            
//         }
//     }
//     return dp[m][n];
// }
// int main(){
//     string str1,str2;
//     cin>>str1>>str2;
//     int d=distance(str1,str2);
//     cout<<d<<endl;
// }



// segment tree

// #include<iostream>
// #include<vector>
// #include<climits>
// using namespace std;
// void buildTree(vector<int> &arr,vector<int>&tree,int start,int end,int node)
// {
//     if(start==end){
//         tree[node]=arr[start];
//         return;
//     }
    
//     int mid=(start+end)/2;
//     buildTree(arr,tree,start,mid,2*node+1);
//     buildTree(arr,tree,mid+1,end,2*node+2);
    
//     tree[node]=min(tree[2*node+1],tree[2*node+2]);
// }
// int query(vector<int> &tree,int start,int end,int node,int L,int R){
//     if(L>end || R<start)
//         return INT_MAX;
    
//     if(L<=start && R>=end)
//         return tree[node];
        
//     int mid=(start+end)/2;
//     int leftMin=query(tree,start,mid,2*node+1,L,R);
//     int rightMin=query(tree,mid+1,end,2*node+2,L,R);
    
//     return min(leftMin,rightMin);
// }
// int main()
// {
//     int n;
//     cin>>n;
//     vector<int>arr(n);
//     for(int i=0;i<n;i++)
//         cin>>arr[i];
//     vector<int>tree(4*n);
//     buildTree(arr,tree,0,n-1,0);
    
//  int L,R;
//     cin>>L>>R;
    
//     int minVal=query(tree,0,n-1,0,L,R);
//     cout<<"Minimum of values in range ["<<L<<", "<<R<<"] is = "<<minVal;
//     return 0;
// }






// sparse tree

// #include<iostream>
// #include<vector>
// #include<climits>
// using namespace std;
// void buildTree(vector<int> &arr,vector<int>&tree,int start,int end,int node)
// {
//     if(start==end){
//         tree[node]=arr[start];
//         return;
//     }
    
//     int mid=(start+end)/2;
//     buildTree(arr,tree,start,mid,2*node+1);
//     buildTree(arr,tree,mid+1,end,2*node+2);
    
//     tree[node]=min(tree[2*node+1],tree[2*node+2]);
// }
// int query(vector<int> &tree,int start,int end,int node,int L,int R){
//     if(L>end || R<start)
//         return INT_MAX;
    
//     if(L<=start && R>=end)
//         return tree[node];
        
//     int mid=(start+end)/2;
//     int leftMin=query(tree,start,mid,2*node+1,L,R);
//     int rightMin=query(tree,mid+1,end,2*node+2,L,R);
    
//     return min(leftMin,rightMin);
// }
// int main()
// {
//     int n;
//     cin>>n;
//     vector<int>arr(n);
//     for(int i=0;i<n;i++)
//         cin>>arr[i];
//     vector<int>tree(4*n);
//     buildTree(arr,tree,0,n-1,0);
 
//     int L,R;
//     cin>>L>>R;
    
//     int minVal=query(tree,0,n-1,0,L,R);
//     cout<<"Minimum of values in range ["<<L<<", "<<R<<"] is = "<<minVal;
//     return 0;
// }


//  floyd

// #include<iostream>
// using namespace std;
// int INF=99999;
// int V;
// void FW(int **graph)
// {
//     int dist[V][V],i,j,k;
//     for(int i=0;i<V;i++)
//     {
//         for(j=0;j<V;j++)
//         {
//             dist[i][j]=graph[i][j];
//         }
//     }
//     for(k=0;k<V;k++)
//     {
//        for(int i=0;i<V;i++)
//        {
//           for(j=0;j<V;j++)
//           {
//               if(dist[i][j]>dist[i][k]+dist[k][j])
              
//               dist[i][j]=dist[i][k]+dist[k][j];
//           }
//        }
//     }
//     cout<<"\nShortest path matrix"<<endl;
//     for(int i=0;i<V;i++)
//     {
//         for(j=0;j<V;j++)
//         {
//             if(dist[i][j]==INF)
//             cout<<"INF"<<" ";
//             else
//             cout<<dist[i][j]<<" ";
//         }
//         cout<<endl;
//     }
// }
// nt main()
// {
//     int E,source,destn,value;
//     cin>>V>>E;
//     int **graph=new int *[V];
//     for(int i=0;i<V;i++)
//     {
//         graph[i]=new int[V];
//     }
//     for(int i=0;i<V;i++)
//     {
//         for(int j=0;j<V;j++)
//         {
//             if(i==j)
//             {
//                 graph[i][j]=0;
//             }
//             else
//             {
//                 graph[i][j]=INF;
//             }
//         }
//     }
//     for(int i=0;i<E;i++)
//     {
//         cin>>source;
//         cin>>destn;
//         cin>>value;
//         graph[source][destn]=value;
//         graph[destn][source]=value;
//     }
//     cout<<"Original matrix"<<endl;
//     for(int i=0;i<V;i++)
//     {
//         for(int j=0;j<V;j++)
//         {
//             if(graph[i][j]==INF)
//             {
//                 cout<<"INF";
//             }
// else
//             {
//                 cout<<graph[i][j]<<" ";
//             }
//         }
//         cout<<endl;
//     }
//     FW(graph);
// }





// Prim's algorithm

// #include <iostream>
// #include <vector>
// #include <climits>
// using namespace stdd
// const int INF = INT_MAX;
// int minKey(vector<int>& key, vector<bool>& mstSet, int V) {
//     int min = INF;
//     int minIndex = -1;
//     for (int v = 0; v < V; v++) {
//         if (!mstSet[v] && key[v] < min) {
//             min = key[v];
//             minIndex = v;
//         }
//     }
//     return minIndex;
// }
// void printMST(vector<int>& parent, vector<vector<int>>& graph, int V) {
//     cout << "Output" << endl;
//     for (int i = 1; i < V; i++) {
//         cout << parent[i] << " " << i << " " << graph[i][parent[i]] << endl;
//     }
// }

// void primMST(vector<vector<int>>& graph, int V) {
//     vector<int> parent(V);  
//     vector<int> key(V);     
//     vector<bool> mstSet(V, false);
//  for (int i = 0; i < V; i++) {
//         key[i] = INF;
//         parent[i] = -1;
//     }
//     key[0] = 0;
//     parent[0] = -1;
//     for (int count = 0; count < V - 1; count++) {
//         int u = minKey(key, mstSet, V);
//         mstSet[u] = true;
//         for (int v = 0; v < V; v++) {
//             if (graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {
//                 parent[v] = u;
//                 key[v] = graph[u][v];
//             }
//         }
//     }

// printMST(parent, graph, V);
// }

// int main() {
//     int V;
//     cin >> V;

//     vector<vector<int>> graph(V, vector<int>(V));

//     for (int i = 0; i < V; i++) {
//         for (int j = 0; j < V; j++) {
//             cin >> graph[i][j];
//         }
//     }

//     primMST(graph, V);

//     return 0;
// }


// Dijikstra

// #include<iostream>
// #include<climits>
// using namespace std;
// const int v=5;
// int mindis(int dist[],bool visited[]){
//     int minindex=-1;
//     int mindist=INT_MAX;
//     for(int i=0;i<v;i++){
//         if(!visited[i]&&dist[i]<=mindist){
//         mindist=dist[i];
//         minindex=i;
//     }
// }
//     return minindex;
// }
// void print(int dist[]){
//     cout<<"Vertex Distance from Source"<<endl;
//     for(int i=0;i<v;i++){
//         cout<<i<<" "<<dist[i]<<endl;
//     }
// }
// void dijk(int graph[v][v],int source){
//     int dist[v];bool visited[v];
//     for(int i=0;i<v;i++){
//     dist[i]=INT_MAX;
//     visited[i]=false;
//     }
//     dist[source]=0;
//     for(int i=0;i<v-1;i++){
//         int u=mindis(dist,visited);
//         visited[u]=true;
//     for(int j=0;j<v;j++){
//       if(!visited[j]&&graph[u][j]&&dist[u]!=INT_MAX&&dist[u]+graph[u][j]<dist[j]){
//           dist[j]=dist[u]+graph[u][j];
//       }
//     }
//     }
//     print(dist);
// }
// int main(){
//     int graph[v][v],source;
//     for(int i=0;i<v;i++){
//     for(int j=0;j<v;j++){
//         cin>>graph[i][j];
//     }
//     }
//     cin>>source;
//     dijk(graph,source);
//     return 0;
// }


// kruskal

// // You are using GCC
// #include <iostream>
// #include <vector>
// #include <algorithm>
// using namespace std;
// struct Edge {
//     int src, dest, weight;
// };
// bool compareEdges(Edge a, Edge b) {
//     return a.weight < b.weight;
// }
// class Graph {
// public:
//     int V, E;
//     vector<Edge> edges;
//     Graph(int v, int e) : V(v), E(e) {
//         edges.resize(E);
//     }
//     void addEdge(int src, int dest, int weight) {
//         edges.push_back({src, dest, weight});
//     }
//     void kruskalMST() {
//         vector<Edge> result;
//         vector<int> parent(V);
//         for (int i = 0; i < V; i++) {
//             parent[i] = i;
//         }
//         sort(edges.begin(), edges.end(), compareEdges);
//         for (Edge edge : edges) {
//             int rootSrc = find(parent, edge.src);
//             int rootDest = find(parent, edge.dest);
//             if (rootSrc != rootDest) {
//                 result.push_back(edge);
//                 unionSets(parent, rootSrc, rootDest);
//             }
//         }
//         int minimumCost = 0;
//         cout << "Following are the edges in the constructed MST" << endl;
//         for (Edge edge : result) {
//             cout << edge.src << " -- " << edge.dest << " == " << edge.weight << endl;
//             minimumCost += edge.weight;
//         }
//         cout << "Minimum Cost Spanning Tree: " << minimumCost << endl;
//     }
// private:
//     int find(vector<int>& parent, int node) {
//         if (parent[node] == node)
//             return node;
//         return find(parent, parent[node]);
//     }
//     void unionSets(vector<int>& parent, int root1, int root2) {
//         parent[root1] = root2;
//     }
// };
// int main() {
//     int V, E;
//     cin >> V >> E;
//     Graph graph(V, E);
//     for (int i = 0; i < E; i++) {
//         int src, dest, weight;
//         cin >> src >> dest >> weight;
//         graph.addEdge(src, dest, weight);
//     }
//     graph.kruskalMST();
//     return 0;
// }