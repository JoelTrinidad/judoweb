import { describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { WrappedApp } from './App';

describe('App', () => {
  describe('Title', () => {
    afterEach(cleanup);

    it('should render with the title visible', () => {
      render(<WrappedApp />);

      const title = screen.getByText('JudoDigital');

      expect(title).toBeInTheDocument();
    });

    it("title should in an 'A' tag", () => {
      render(<WrappedApp />);

      const title = screen.getByText('JudoDigital');

      expect(title.parentElement?.tagName).toBe('A');
    });
  });

  describe('History section link', () => {
    afterEach(cleanup);

    it('should render with the history section link visible', () => {
      render(<WrappedApp />);

      const link = screen.getByText('Historia');

      expect(link).toBeInTheDocument();
    });

    it("history section link should in an 'A' tag", () => {
      render(<WrappedApp />);

      const link = screen.getByText('Historia');

      expect(link.tagName).toBe('A');
    });
  });

  describe('Techniques section link', () => {
    afterEach(cleanup);

    it('should render with the techniques sectin link visible', () => {
      render(<WrappedApp />);

      const link = screen.getByText('Técnicas');

      expect(link).toBeInTheDocument();
    });

    it("techniques section link should in an 'A' tag", () => {
      render(<WrappedApp />);

      const link = screen.getByText('Glosario');

      expect(link.tagName).toBe('A');
    });
  });

  describe('Glosary section link', () => {
    afterEach(cleanup);

    it('should render with the glosary section link visible', () => {
      render(<WrappedApp />);

      const link = screen.getByText('Historia');

      expect(link).toBeInTheDocument();
    });

    it("glosary section link should in an 'A' tag", () => {
      render(<WrappedApp />);

      const link = screen.getByText('Historia');

      expect(link.tagName).toBe('A');
    });
  });
});
