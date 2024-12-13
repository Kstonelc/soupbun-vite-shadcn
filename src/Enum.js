export class QuestionType {
  static {
    // 枚举值
    this.gapFill = 1 << 0;
    this.choice = 1 << 1;
    // 文本
    this.text = {};
    this.text[this.gapFill] = "填空题";
    this.text[this.choice] = "选择题";
  }
}
