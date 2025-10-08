export const sayHello = (name = '사용자') => {
  console.log(`👋 안녕하세요, ${name}님!`);
};

export async function delayedHello() {
  await new Promise((r) => setTimeout(r, 1000));
  console.log('⏰ 1초가 지났어요!');
}
