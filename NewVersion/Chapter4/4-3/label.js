kuku:
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        let result = i * j;
        if (result > 30) {
          break kuku;
        }
        console.log(result);
      }
      console.log();
    }
