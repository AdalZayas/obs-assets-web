module.exports = {
  // nextjs app
  apps: [
    {
      name: "nextjs",
      script: "npm",
      args: "run start",
      instances: 0,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
