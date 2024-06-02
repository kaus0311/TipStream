const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ContentTipping", function () {
  let ContentTipping, contentTipping, owner, addr1, addr2;

  beforeEach(async function () {
    ContentTipping = await ethers.getContractFactory("ContentTipping");
    [owner, addr1, addr2, _] = await ethers.getSigners();
    contentTipping = await ContentTipping.deploy();
    await contentTipping.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await contentTipping.owner()).to.equal(owner.address);
    });
  });

  describe("Content Creation", function () {
    it("Should create content and emit ContentCreated event", async function () {
      const contentHash = "QmXj..."
      await expect(contentTipping.createContent(contentHash))
        .to.emit(contentTipping, "ContentCreated")
        .withArgs(1, owner.address, contentHash);

      const content = await contentTipping.contents(1);
      expect(content.creator).to.equal(owner.address);
      expect(content.contentHash).to.equal(contentHash);
      expect(content.tipsReceived).to.equal(0);
    });
  });

  describe("Tipping Content", function () {
    it("Should tip content and emit TipReceived event", async function () {
      const contentHash = "QmXj...";
      await contentTipping.createContent(contentHash);

      await expect(contentTipping.connect(addr1).tipContent(1, { value: ethers.utils.parseEther("1.0") }))
        .to.emit(contentTipping, "TipReceived")
        .withArgs(1, addr1.address, ethers.utils.parseEther("1.0"));

      const content = await contentTipping.contents(1);
      expect(content.tipsReceived).to.equal(ethers.utils.parseEther("1.0"));
    });
  });
});
