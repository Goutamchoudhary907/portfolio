import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

export default function CertificatesGallery({ certificates, className }) {
  const [active, setActive] = useState(null);

  if (certificates.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-semibold">No certificates found</h2>
        <p className="text-muted-foreground">
          Check back later for certificates and achievements!
        </p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const activeCert = certificates.find((c) => c.file === active);

  return (
    <>
      <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 ${className}`}>
        {certificates.map((cert) => (
          <Card
            key={cert.file}
            className="group h-full w-full cursor-pointer overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800"
            onClick={() => setActive(cert.file)}
          >
            <CardHeader className="p-0">
              <div className="group bg-muted/20 relative aspect-video overflow-hidden">
                <img
                  src={cert.file}
                  alt={cert.title || 'certificate'}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </CardHeader>

            <CardContent className="px-6">
              <div className="space-y-2">
                <h3 className="group-hover:text-primary text-xl leading-tight font-semibold">
                  {cert.title || 'Certificate'}
                </h3>
                {cert.issuer && (
                  <p className="text-secondary text-sm">{cert.issuer}</p>
                )}
              </div>
            </CardContent>

            {cert.date && (
              <CardFooter className="p-6 pt-0">
                <time className="text-secondary text-sm" dateTime={cert.date}>
                  {formatDate(cert.date)}
                </time>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>

      {/* Fullscreen viewer */}
      <Dialog open={!!active} onOpenChange={(open) => { if (!open) setActive(null); }}>
        <DialogContent className="bg-background/95 max-h-[90vh] w-full max-w-[90vw] border-0 p-0 backdrop-blur-sm">
          {active && (
            <>
              <DialogTitle className="sr-only">
                {activeCert?.title || 'Certificate'}
              </DialogTitle>
              <div className="flex h-60 items-center justify-center p-4 md:h-92">
                <div className="relative h-full w-full rounded-lg">
                  <img
                    src={active}
                    alt={activeCert?.title || 'certificate'}
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>
              </div>
              {activeCert && (
                <div className="border-t px-6 pt-2 pb-6">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">
                      {activeCert.title || 'Certificate'}
                    </h3>
                    {activeCert.issuer && (
                      <p className="text-muted-foreground text-sm">{activeCert.issuer}</p>
                    )}
                    {activeCert.date && (
                      <time className="text-muted-foreground text-xs" dateTime={activeCert.date}>
                        {formatDate(activeCert.date)}
                      </time>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}