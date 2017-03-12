
module.exports = {
  next: function(items, index, delta) {
    const surplusedDelta = delta % items.length;
    return items[(index + surplusedDelta) % items.length];
  },

  prev: function(items, index, delta) {
    const surplusedDelta = delta % items.length;
    return items[(items.length - (surplusedDelta - index)) % items.length];
  }

};

// items.length: 5
// index: 1
// surplusedDelta: 1
//
// 5 - (1 + 1) : 3; 0

// 5 - (0 + 1) : 4;
