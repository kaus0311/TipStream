// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContentTipping {
    struct Content {
        address payable creator;
        string contentHash;
        uint256 tipsReceived;
    }

    uint256 public contentCount = 0;
    mapping(uint256 => Content) public contents;

    event ContentCreated(
        uint256 contentId,
        address creator,
        string contentHash
    );

    event TipReceived(
        uint256 contentId,
        address from,
        uint256 amount
    );

    function createContent(string memory _contentHash) public {
        contentCount++;
        contents[contentCount] = Content(payable(msg.sender), _contentHash, 0);
        emit ContentCreated(contentCount, msg.sender, _contentHash);
    }

    function tipContent(uint256 _contentId) public payable {
        require(_contentId > 0 && _contentId <= contentCount, "Content does not exist");
        Content storage content = contents[_contentId];
        content.creator.transfer(msg.value);
        content.tipsReceived += msg.value;
        emit TipReceived(_contentId, msg.sender, msg.value);
    }

    function getContent(uint256 _contentId) public view returns (address, string memory, uint256) {
        require(_contentId > 0 && _contentId <= contentCount, "Content does not exist");
        Content storage content = contents[_contentId];
        return (content.creator, content.contentHash, content.tipsReceived);
    }
}
