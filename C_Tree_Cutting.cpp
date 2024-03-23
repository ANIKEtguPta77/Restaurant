#include<bits/stdc++.h>
using namespace std;

auto solve=[&](int si,int k,vector<vector<int>> &adj)
{
    int cuts=0;

    auto dfs=[&](int node,int par)
    {
        int size=1;

        for(auto num:adj[node])
        {
            if(num!=parent)
            {
                size+=dfs(num,node);
            }
        }

        if(size>=si)
        {
            cuts++;
            size=0;
        }
        return size;
    }

    dfs(1,1);

    return cuts>k;
}


int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int n,k;
        cin>>n>>k;

        vector<vector<int>> adj(n+1);

        for(int i=0;i<(n-1);i++)
        {
            int u,v;
            cin>>u>>v;
            adj[u].push_back(v);
            adj[v].push_back(u);
        }

        int low=0;
        int high=n-1;

        int x=0;
        while(low<=high)
        {
            int mid=(low+high)/2;
            if(solve(mid,k,adj))
            {
                x=mid;
                low=mid+1;
            }
            else{
                high=mid-1;
            }
        }
        cout<<x<<endl;

    }
    return 0;
}