// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docsSidebar: [
    "docs/introduction",
    {
      type: "category",
      label: "Quickstart",
      items: [
        {
          type: "autogenerated",
          dirName: "docs/quickstart",
        },
      ],
    },
    {
      type: "category",
      label: "Chat",
      items: [
        {
          type: "autogenerated",
          dirName: "docs/chat",
        },
      ],
    },
    {
      type: "category",
      label: "Autocomplete",
      items: [
        {
          type: "autogenerated",
          dirName: "docs/autocomplete",
        },
      ],
    },
    {
      type: "category",
      label: "Edit",
      items: [
        {
          type: "autogenerated",
          dirName: "docs/edit",
        },
      ],
    },
    {
      type: "category",
      label: "Actions",
      items: [
        {
          type: "autogenerated",
          dirName: "docs/actions",
        },
      ],
    },
  ],
  referenceSidebar: [
    "reference/config",
    {
      type: "category",
      label: "Set up",
      items: [
        {
          type: "autogenerated",
          dirName: "reference/setup",
        },
      ],
    },
    {
      type: "category",
      label: "LLM providers",
      items: [
        {
          type: "autogenerated",
          dirName: "reference/llm-providers",
        },
      ],
    },
    {
      type: "category",
      label: "Embeddings providers",
      items: [
        {
          type: "autogenerated",
          dirName: "reference/embeddings-providers",
        },
      ],
    },
    {
      type: "category",
      label: "Reranking providers",
      items: [
        {
          type: "autogenerated",
          dirName: "reference/reranking-providers",
        },
      ],
    },
    "reference/context-providers",
    "reference/slash-commands",
    {
      type: "category",
      label: "Deep dives",
      items: [
        {
          type: "autogenerated",
          dirName: "reference/deep-dives",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      items: [
        {
          type: "autogenerated",
          dirName: "reference/tutorials",
        },
      ],
    },
    "reference/troubleshooting",
    "reference/changelog",
  ],
};

module.exports = sidebars;
