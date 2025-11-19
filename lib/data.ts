import portfolioData from '@/data/portfolio.json';
import { PortfolioData } from '@/types/portfolio';

export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}
