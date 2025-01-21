class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        int[] result=new int[k];
        HashMap<Integer,Integer> map=new HashMap<>();
        for(int i=0;i<nums.length;i++){
            map.put(nums[i],map.getOrDefault(nums[i],1)+1);
        }

        PriorityQueue<Map.Entry<Integer,Integer>> pq=new PriorityQueue<>(
            (a,b)-> Integer.compare(b.getValue(),a.getValue())
        );

        for(Map.Entry<Integer,Integer> sets: map.entrySet()){
            pq.offer(sets);
        }

        for(int i=0;i<k;i++){
            result[i]=pq.poll().getKey();
        }
        
        return result;
    }
}