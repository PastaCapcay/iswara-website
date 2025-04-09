'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">Oops, ada yang salah!</h2>
            <p className="text-gray-600 mb-4">Mohon maaf, terjadi kesalahan. Silakan refresh halaman.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 