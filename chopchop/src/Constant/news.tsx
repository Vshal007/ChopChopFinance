const currentTime = new Date();

export const blogs = [
  {
    title: "Blog 1",
    time: currentTime.toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 2",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 2)
    ).toISOString(),
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 3",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 4)
    ).toISOString(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 4",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 6)
    ).toISOString(),
    content:
      "Fusce euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 5",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 8)
    ).toISOString(),
    content:
      "Maecenas euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 1",
    time: currentTime.toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 2",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 2)
    ).toISOString(),
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 3",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 4)
    ).toISOString(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 4",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 6)
    ).toISOString(),
    content:
      "Fusce euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 5",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 8)
    ).toISOString(),
    content:
      "Maecenas euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 1",
    time: currentTime.toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 2",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 2)
    ).toISOString(),
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 3",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 4)
    ).toISOString(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 4",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 6)
    ).toISOString(),
    content:
      "Fusce euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 5",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 8)
    ).toISOString(),
    content:
      "Maecenas euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 1",
    time: currentTime.toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 2",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 2)
    ).toISOString(),
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 3",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 4)
    ).toISOString(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 4",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 6)
    ).toISOString(),
    content:
      "Fusce euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 5",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 8)
    ).toISOString(),
    content:
      "Maecenas euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 1",
    time: currentTime.toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 2",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 2)
    ).toISOString(),
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 3",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 4)
    ).toISOString(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 1",
    time: currentTime.toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 2",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 2)
    ).toISOString(),
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 3",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 4)
    ).toISOString(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 4",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 6)
    ).toISOString(),
    content:
      "Fusce euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 5",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 8)
    ).toISOString(),
    content:
      "Maecenas euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 1",
    time: currentTime.toISOString(),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 2",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 2)
    ).toISOString(),
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 3",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 4)
    ).toISOString(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi.",
  },
  {
    title: "Blog 4",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 6)
    ).toISOString(),
    content:
      "Fusce euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 5",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 8)
    ).toISOString(),
    content:
      "Maecenas euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 4",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 6)
    ).toISOString(),
    content:
      "Fusce euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
  {
    title: "Blog 5",
    time: new Date(
      currentTime.setHours(currentTime.getHours() - 8)
    ).toISOString(),
    content:
      "Maecenas euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed nec mi auctor, tincidunt nunc vitae, semper nunc. Sed auctor, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat. Nulla facilisi. Sed euismod, nisl ac lacinia lacinia, nunc nunc tincidunt nunc, id lacinia nunc nunc vitae erat.",
  },
];
