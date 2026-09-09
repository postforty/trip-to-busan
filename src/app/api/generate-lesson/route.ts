import { NextRequest, NextResponse } from 'next/server';
import { lessonGraph } from '@/lib/ai/workflow';
import { mockLessons } from '@/data/mockLessons';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const topic = body.topic?.trim();

    if (!topic) {
      return NextResponse.json(
        { error: '학습을 원하는 상황 또는 주제를 입력해주세요.' },
        { status: 400 }
      );
    }

    // API 키 존재 여부 확인
    if (!process.env.GEMINI_API_KEY) {
      // API 키가 없을 때는 mockLessons 중 관련 항목 또는 기본 레슨을 반환
      const fallback = {
        ...mockLessons[0],
        id: `mock-${Date.now()}`,
        themeTitle: `${topic} (데모 모드)`,
      };
      return NextResponse.json({
        lesson: fallback,
        isFallback: true,
        message: 'GEMINI_API_KEY가 설정되지 않아 데모 레슨을 제공합니다.',
      });
    }

    // LangGraph 워크플로우 실행
    const result = await lessonGraph.invoke({
      topic,
      draftJson: '',
      finalLesson: null,
    });

    if (!result.finalLesson) {
      throw new Error('레슨 생성 결과를 파싱하지 못했습니다.');
    }

    return NextResponse.json({
      lesson: result.finalLesson,
      isFallback: false,
    });
  } catch (error: unknown) {
    console.error('Lesson Generation Error:', error);
    // 예외 발생 시에도 사용자 경험을 위해 mockFallback 제공
    const fallback = mockLessons[0];
    return NextResponse.json(
      {
        lesson: fallback,
        isFallback: true,
        error: error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
      },
      { status: 200 }
    );
  }
}
