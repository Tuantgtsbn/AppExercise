const translateToVN = (word: string): string => {
  const translations: Record<string, string> = {
    Easy: 'Dễ',
    Medium: 'Trung bình',
    Hard: 'Khó'
  };

  return translations[word] || 'Không xác định';
};

export default translateToVN;
