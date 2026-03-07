/** @type {import('tailwindcss').Config} */
export default {
  // v4는 content 스캔을 자동으로 하므로 content 배열이 필요 없습니다.
  // darkMode도 CSS에서 @theme { --dark-mode: selector; } 로 설정 가능하지만,
  // 플러그인 호환성을 위해 남겨둘 수 있습니다.
  plugins: [require('tailwind-scrollbar')],
};
