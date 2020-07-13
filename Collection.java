import java.util.*;

class Collection {

    public static void main(String[] args) {
        Queue<String> queue = new PriorityQueue<>();

        queue.add("2");

        queue.offer("1");

        Iterator<String> iterator = queue.iterator();
        while (iterator.hasNext()) {
            String key = (String)iterator.next();
            System.out.println(key);
        }

        /*
        Map<String, Integer> map = new HashMap<String, Integer>();
        map.put("one",1);

        Integer value = map.get("one");
        map.containsValue(1);
        map.containsKey("one");

        Iterator iterator = map.keySet().iterator();
        while (iterator.hasNext()) {
            String key = (String)iterator.next();
            Integer val = (Integer)map.get(key);
            System.out.println(key + " " + val);
        }

        Iterator iterator2 = map.values().iterator();
        while(iterator2.hasNext()) {
            Integer val = (Integer)iterator2.next();
            System.out.println(val);
        }


        /*
        // SortedSet
        SortedSet treeSet = new TreeSet();
        
        treeSet.add("one");
        treeSet.add("two");
        treeSet.add("three");

        Iterator iterator = ((TreeSet) treeSet).descendingIterator();
        while(iterator.hasNext()) {
            String element = (String) iterator.next();
            System.out.println(element);
        }

        /*
        Set<Integer> set = new HashSet<Integer>();
        set.add(1);
        set.add(2);
        set.add(1);
        System.out.println(set.toString());
        /*
        List<String> list = new ArrayList<String>();
        list.add("one");
        list.add("two");
        list.add("three");
        String[] values = new String[]{ "one", "two", "three" };

        System.out.println(list);
        System.out.println(values.toString());
        /*
        Collections.addAll(list, "element 1", "element 2", "element 3");
        Collections.sort(list);
        System.out.println(Collections.binarySearch(list, "two"));

        return;
        /*
        for (int counter = 0; counter < list.size(); counter++) {
            System.out.println(list.get(counter));
        }

        for (String element : list) {
            System.out.println(element);
        }

        list.forEach((element) -> {
            System.out.println(element);
        });

        Iterator<String> iterator = list.iterator();
        
        Set<String> set = new HashSet<>();
        set.add("one");
        set.add("two");
        set.add("three");

        Iterator<String> iterator2 = set.iterator();

        // Iterating an Iterator
        // while(iterator.hasNext()) {
        //     String nextObject = iterator.next();
        //     System.out.println(nextObject.toString());
        // }

        while(iterator2.hasNext()) {
            String nextObject = iterator2.next();
            System.out.println(nextObject.toString());
        }

        iterator.forEachRemaining((element) -> {
            System.out.println(element);
        });
        */
    }

}