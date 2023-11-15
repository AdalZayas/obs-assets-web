module.exports = {
  // nextjs app
  apps: [
    {
      name: "nextjs",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
