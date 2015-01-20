describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([], 0) ).toEqual( [] );
    });
    it ('handles an array with 1 element', function(){
    	expect( bubbleSort([2], 0)).toEqual([2]);
    });
    it ('handles an array with multiple elements', function(){
    	expect( bubbleSort([2,6,4,8,1,3,5], 0)).toEqual([1,2,3,4,5,6,8]);
    });
});

describe('Merge Sort', function(){
	 it ('is able to merge two sorted arrays', function(){
	 	expect(merge([2,6], [4,8])).toEqual([2,4,6,8]);
	 });
	 it ('is able to split a single array', function(){
	 	expect(split([9,8,7,6])).toEqual([[9,8], [7,6]]);
	 });
	it ('is able to sort an array using merge method', function(){
		expect(mergeSort([6,2,4,8,1,3,5,7,12,13,11])).toEqual([1,2,3,4,5,6,7,8,11,12,13]);
	})
});
