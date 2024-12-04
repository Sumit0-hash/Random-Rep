require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 3000
const github_dummy = [
    {
      id: 123456789,
      name: "dummy-repo",
      full_name: "username/dummy-repo",
      private: false,
      owner: {
        login: "username",
        id: 987654321,
        avatar_url: "https://avatars.githubusercontent.com/u/987654321?v=4",
        html_url: "https://github.com/username"
      },
      html_url: "https://github.com/username/dummy-repo",
      description: "A dummy GitHub repository for testing purposes.",
      fork: false,
      url: "https://api.github.com/repos/username/dummy-repo",
      created_at: "2023-01-01T12:00:00Z",
      updated_at: "2023-12-01T12:00:00Z",
      pushed_at: "2023-12-01T12:30:00Z",
      git_url: "git://github.com/username/dummy-repo.git",
      ssh_url: "git@github.com:username/dummy-repo.git",
      clone_url: "https://github.com/username/dummy-repo.git",
      svn_url: "https://github.com/username/dummy-repo",
      homepage: null,
      size: 1024,
      stargazers_count: 42,
      watchers_count: 42,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 10,
      archived: false,
      disabled: false,
      open_issues_count: 5,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZW1pdA=="
      },
      allow_forking: true,
      is_template: false,
      topics: ["dummy", "github-api", "json"],
      visibility: "public",
      forks: 10,
      open_issues: 5,
      watchers: 42,
      default_branch: "main",
      permissions: {
        admin: true,
        maintain: false,
        push: true,
        triage: false,
        pull: true
      }
    }
  ];
  
app.get('/', (req, res) => {
    res.send('My server is running.')
})
app.get('/twitter',(req,res)=>{
    res.send('xdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login!!</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome to Youtube</h2>')
})
app.get('/Github',(req,res)=>{
    res.json(github_dummy)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})