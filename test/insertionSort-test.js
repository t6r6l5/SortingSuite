const chai = require('chai');
const assert = chai.assert;
const insertionSort = require('../lib/insertionSort.js');
const hugeArray = require('../hugeArray.js');
const speedTest = require('./performance-test.js');
let huge10000 = hugeArray.slice(0,10000);
let huge20000 = hugeArray.slice(0,20000);
let huge100000 = hugeArray.slice(0,100000);
let huge400000 = hugeArray;

let largeSortArray = [775, 71, 415, 525, 540, 90, 441, 810, 201, 913, 977, 314, 765, 366, 75, 112, 482, 234, 27, 721, 643, 488, 652, 27, 998, 677, 64, 819, 453, 997, 766, 970, 169, 345, 26, 181, 671, 231, 100, 788, 817, 991, 274, 943, 409, 984, 460, 324, 834, 997, 311, 652, 481, 754, 99, 353, 81, 644, 131, 949, 444, 359, 178, 491, 611, 804, 604, 473, 748, 532, 238, 783, 745, 40, 320, 354, 597, 876, 304, 293, 414, 822, 486, 910, 289, 504, 302, 982, 65, 989, 867, 339, 831, 639, 837, 484, 52, 296, 100, 308, 101, 17, 102, 733, 103, 770, 104, 738, 105, 104, 106, 352, 107, 732, 108, 153, 109, 838, 110, 893, 111, 266, 112, 920, 113, 623, 114, 831, 115, 974, 116, 360, 117, 317, 118, 454, 119, 109, 120, 581, 121, 12, 122, 507, 123, 920, 124, 147, 125, 112, 126, 782, 127, 834, 128, 937, 129, 405, 130, 351, 131, 817, 132, 53, 133, 907, 134, 907, 135, 438, 136, 62, 137, 674, 138, 758, 139, 332, 140, 206, 141, 652, 142, 487, 143, 638, 144, 191, 145, 75, 146, 149, 147, 165, 148, 253, 149, 915, 150, 789, 151, 195, 152, 886, 153, 867, 154, 287, 155, 61, 156, 855, 157, 859, 158, 825, 159, 694, 160, 362, 161, 244, 162, 370, 163, 677, 164, 211, 165, 784, 166, 165, 167, 302, 168, 701, 169, 825, 170, 623, 171, 327, 172, 616, 173, 812, 174, 678, 175, 923, 176, 17, 177, 582, 178, 999, 179, 790, 180, 975, 181, 358, 182, 43, 183, 388, 184, 950, 185, 21, 186, 274, 187, 983, 188, 841, 189, 273, 190, 499, 191, 143, 192, 317, 193, 399, 194, 184, 195, 846, 196, 583, 197, 689, 198, 129, 199, 996, 200, 415, 201, 591, 202, 123, 203, 381, 204, 33, 205, 792, 206, 194, 207, 309, 208, 715, 209, 634, 210, 960, 211, 891, 212, 19, 213, 314, 214, 429, 215, 527, 216, 797, 217, 952, 218, 714, 219, 679, 220, 258, 221, 770, 222, 106, 223, 385];


let sortedArray = [12, 17, 17, 19, 21, 26, 27, 27, 33, 40, 43, 52, 53, 61, 62, 64, 65, 71, 75, 75, 81, 90, 99, 100, 100, 101, 102, 103, 104, 104, 105, 106, 106, 107, 108, 109, 109, 110, 111, 112, 112, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 123, 124, 125, 126, 127, 128, 129, 129, 130, 131, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 143, 144, 145, 146, 147, 147, 148, 149, 149, 150, 151, 152, 153, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 165, 165, 166, 167, 168, 169, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 178, 179, 180, 181, 181, 182, 183, 184, 184, 185, 186, 187, 188, 189, 190, 191, 191, 192, 193, 194, 194, 195, 195, 196, 197, 198, 199, 200, 201, 201, 202, 203, 204, 205, 206, 206, 207, 208, 209, 210, 211, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 231, 234, 238, 244, 253, 258, 266, 273, 274, 274, 287, 289, 293, 296, 302, 302, 304, 308, 309, 311, 314, 314, 317, 317, 320, 324, 327, 332, 339, 345, 351, 352, 353, 354, 358, 359, 360, 362, 366, 370, 381, 385, 388, 399, 405, 409, 414, 415, 415, 429, 438, 441, 444, 453, 454, 460, 473, 481, 482, 484, 486, 487, 488, 491, 499, 504, 507, 525, 527, 532, 540, 581, 582, 583, 591, 597, 604, 611, 616, 623, 623, 634, 638, 639, 643, 644, 652, 652, 652, 671, 674, 677, 677, 678, 679, 689, 694, 701, 714, 715, 721, 732, 733, 738, 745, 748, 754, 758, 765, 766, 770, 770, 775, 782, 783, 784, 788, 789, 790, 792, 797, 804, 810, 812, 817, 817, 819, 822, 825, 825, 831, 831, 834, 834, 837, 838, 841, 846, 855, 859, 867, 867, 876, 886, 891, 893, 907, 907, 910, 913, 915, 920, 920, 923, 937, 943, 949, 950, 952, 960, 970, 974, 975, 977, 982, 983, 984, 989, 991, 996, 997, 997, 998, 999];


describe('insertionSort', function() {
  beforeEach( function (){
    smallTestArray = [5, 0, 1, 3, 4, 2, 9, 11, 38, 17];
  });
  it('Should be a function', function (){
    assert.isFunction(insertionSort);
  });
  it('Should sort a small test array', function(){
    assert.deepEqual(insertionSort(smallTestArray), [0,1,2,3,4,5,9,11,17,38]);
  });
  it('Should sort a big array', function(){
    assert.deepEqual(insertionSort(largeSortArray),sortedArray);
  });
  it('Should sort an array with 10,000 numbers in it', function (){
    assert.deepEqual(insertionSort(huge10000),huge10000.sort((a,b) => a-b));
  });
  it('Should sort an array with 20,000 numbers in it', function (){
    assert.deepEqual(insertionSort(huge20000),huge20000.sort((a,b) => a-b));
  });
  it('Should work on an array of negative numbers', function() {
    let testNegative = [-5,-2,-3,-12,-20,-15,-9,-1,-4];
    assert.deepEqual(insertionSort(testNegative), [-20,-15,-12,-9,-5,-4,-3,-2,-1]);    
  });
  it('Should work on an array with positives and negatives', function (){
    let mixedPosNeg = [-5,3,-2,-3,7,-12,2,6,-20,-15,1,13,-9,-1,-4];
    assert.deepEqual(insertionSort(mixedPosNeg),[ -20, -15, -12, -9, -5, -4, -3, -2, -1, 1, 2, 3, 6, 7, 13 ]);    
  });
  it('Should also sort letters', function(){
    assert.deepEqual(insertionSort(["d", "b", "a", "c"]),["a", "b", "c", "d"]);
  });
});


// negative nums, really big numbers, 83 17