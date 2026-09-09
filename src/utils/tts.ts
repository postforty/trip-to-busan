/**
 * Web Speech API를 활용한 일본어 음성 출력 유틸리티
 */
export function speakJapanese(
  text: string,
  rate: number = 0.9,
  onStart?: () => void,
  onEnd?: () => void
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    alert('이 브라우저는 음성 읽기(TTS) 기능을 지원하지 않습니다.');
    return;
  }

  // 이전 재생 중지
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = rate; // 0.8: 천천히, 1.0: 보통

  if (onStart) utterance.onstart = onStart;
  if (onEnd) utterance.onend = onEnd;
  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
}
