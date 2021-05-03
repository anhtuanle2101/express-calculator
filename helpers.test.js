const {mean, median, mode} = require('./helpers');

test('mean should work', function(){
    let nums = [1,2,3,4,5,6];
    expect(mean(nums)).toEqual(3.5);
    nums = [3,3,3,3,3,3,3]
    expect(mean(nums)).toEqual(3);
})

test('median should work', function(){
    let nums = [1,2,3,4,5,6];
    expect(median(nums)).toEqual(3.5);
    nums = [3,3,3,3,3,3,3]
    expect(median(nums)).toEqual(3);
})

test('mode should work', function(){
    let nums = [1,2,3,4,5,6];
    expect(mode(nums)).toEqual(1);
    nums = [3,3,3,3,3,3,3]
    expect(mode(nums)).toEqual(3);
})