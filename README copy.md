# SeeM 3D Reconstruction - Frontend

这个项目是 SeeM 3D Reconstruction 应用的前端部分，使用 React, NextJS, Redux 和 TailwindCSS 开发。

## 目录
- [安装与运行](#安装与运行)
- [使用的技术](#使用的技术)
- [项目结构](#项目结构)

## 安装与运行
在克隆项目后，运行`npm install`安装所有依赖模组，之后用`npm run dev`来运行。
没有npm就先装npm..

## 使用的技术
- **React**：用于构建用户界面的JavaScript库。
- **Next.js**：
    - 一个用于构建服务端渲染（SSR）和静态网站生成（SSG）的React框架。
    - 提供了文件系统路由、API路由、静态文件服务等功能。
    - 使用 App Router
- **Redux**：
    - 用于应用状态管理。
    - 现在大家都用redux toolkit了，更方便一点。请使用redux toolkit。
    - 目前没有使用context api的打算，请使用redux或者直接发送后端进行数据管理。如果认为需要，欢迎一起讨论后决定。

## 项目结构

seem-b2b-frontend
├── node_modules
├── public
│   ├── assets
├── src
│   ├── app
│   │   ├── agent
│   │   ├── auth
│   │   ├── gallery
│   │   ├── home
│   │   ├── knowledge
│   │   ├── profile
│   │   ├── projects
│   │   ├── task
│   │   ├── tutorials
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   ├── page.js
│   ├── components
│   ├── hooks
│   ├── libs
│   ├── styles
│   ├── middleware.ts
├── .gitignore
├── components.json
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.mjs

